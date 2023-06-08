window.BENCHMARK_DATA = {
  "lastUpdate": 1686244198685,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "477fdd33183a31455006a21bc0237566ee9b861a",
          "message": "docs: change.md",
          "timestamp": "2023-06-09T01:41:56+09:00",
          "tree_id": "6e0b5089ff7d5c730bfbee0ef601896697ada1dd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/477fdd33183a31455006a21bc0237566ee9b861a"
        },
        "date": 1686244006227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9918078.90860215,
            "unit": "ns",
            "range": "± 1957485.152825643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32993034.81521739,
            "unit": "ns",
            "range": "± 13313411.991728153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56552928.175,
            "unit": "ns",
            "range": "± 2952500.8542872863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119567238.91304348,
            "unit": "ns",
            "range": "± 13325141.112654494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228049011.64285713,
            "unit": "ns",
            "range": "± 5250683.086166468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83159.61363636363,
            "unit": "ns",
            "range": "± 6169.648538643562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361639.8222222222,
            "unit": "ns",
            "range": "± 30546.719291591296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346346.6509433962,
            "unit": "ns",
            "range": "± 14291.822273589007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337872.9157303371,
            "unit": "ns",
            "range": "± 18307.015546585724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4368319.242424242,
            "unit": "ns",
            "range": "± 134816.43256712772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3782330.5789473685,
            "unit": "ns",
            "range": "± 164201.01316721825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31004.478260869564,
            "unit": "ns",
            "range": "± 3695.695836213788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129683.60204081633,
            "unit": "ns",
            "range": "± 17891.88851314472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119946.43617021276,
            "unit": "ns",
            "range": "± 7975.217244903666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133026.13829787233,
            "unit": "ns",
            "range": "± 15943.912744502959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9067.103092783505,
            "unit": "ns",
            "range": "± 1236.4171818583327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26796.12365591398,
            "unit": "ns",
            "range": "± 4138.466371879013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1743588.8636363635,
            "unit": "ns",
            "range": "± 222205.13181857415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3512296.393258427,
            "unit": "ns",
            "range": "± 570994.2115144947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3001110.6279069767,
            "unit": "ns",
            "range": "± 500028.8504110372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15617740.51,
            "unit": "ns",
            "range": "± 6096335.054553484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3466224.4555555554,
            "unit": "ns",
            "range": "± 256578.27890677348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3571192,
            "unit": "ns",
            "range": "± 115514.37364048707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4655091.244680851,
            "unit": "ns",
            "range": "± 180470.5317957174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4764512.662790698,
            "unit": "ns",
            "range": "± 548423.9324575332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8177997.823529412,
            "unit": "ns",
            "range": "± 513107.7140095203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7215289.946546053,
            "unit": "ns",
            "range": "± 237190.4317417921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2147340.225463867,
            "unit": "ns",
            "range": "± 42136.59356443843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346553.0340711805,
            "unit": "ns",
            "range": "± 24602.897541127095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2906758.5736049106,
            "unit": "ns",
            "range": "± 93737.72409181453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885034.3078425481,
            "unit": "ns",
            "range": "± 13080.731857615208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 816469.1049107143,
            "unit": "ns",
            "range": "± 9942.786540834253"
          }
        ]
      }
    ]
  }
}