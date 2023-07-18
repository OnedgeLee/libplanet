window.BENCHMARK_DATA = {
  "lastUpdate": 1689641619000,
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641577485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413236.0824742268,
            "unit": "ns",
            "range": "± 127319.04003457792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498280.120481928,
            "unit": "ns",
            "range": "± 128728.87345961055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790004.1237113401,
            "unit": "ns",
            "range": "± 124720.28029214496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4722120.786516854,
            "unit": "ns",
            "range": "± 260167.68115715781"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43632.97872340425,
            "unit": "ns",
            "range": "± 2663.3872966610693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6956085.714285715,
            "unit": "ns",
            "range": "± 70321.8409790395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17803100,
            "unit": "ns",
            "range": "± 91305.9065527996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44956375,
            "unit": "ns",
            "range": "± 212074.249969203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92118435.71428572,
            "unit": "ns",
            "range": "± 1367322.8168759018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182969842.85714287,
            "unit": "ns",
            "range": "± 2108915.001556774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4969027.734375,
            "unit": "ns",
            "range": "± 26711.188760151967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502146.4393028845,
            "unit": "ns",
            "range": "± 2523.3685175566925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160557.5721153845,
            "unit": "ns",
            "range": "± 4066.788120348244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546154.296875,
            "unit": "ns",
            "range": "± 21411.34694526343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831322.3911830357,
            "unit": "ns",
            "range": "± 3650.7044871889398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747165.3459821428,
            "unit": "ns",
            "range": "± 4414.347921386458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088700,
            "unit": "ns",
            "range": "± 54762.115858806384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3163880,
            "unit": "ns",
            "range": "± 55702.40056381259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3985757.1428571427,
            "unit": "ns",
            "range": "± 53387.27469070788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3567225,
            "unit": "ns",
            "range": "± 92100.94296831153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5910051.724137931,
            "unit": "ns",
            "range": "± 169010.71314456806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253611.11111111112,
            "unit": "ns",
            "range": "± 8996.772709806512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242681.6326530612,
            "unit": "ns",
            "range": "± 9204.588381829552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226931.86813186813,
            "unit": "ns",
            "range": "± 12678.747564512823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3887773.3333333335,
            "unit": "ns",
            "range": "± 67604.62227082519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3662533.3333333335,
            "unit": "ns",
            "range": "± 30379.966770100014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19079.787234042553,
            "unit": "ns",
            "range": "± 2073.311194462276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87570.83333333333,
            "unit": "ns",
            "range": "± 6929.675570239341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69196.15384615384,
            "unit": "ns",
            "range": "± 3565.3980054214057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85596.59090909091,
            "unit": "ns",
            "range": "± 8140.24271523306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4643.75,
            "unit": "ns",
            "range": "± 852.2184671722819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17850.526315789473,
            "unit": "ns",
            "range": "± 1798.9875216419698"
          }
        ]
      }
    ]
  }
}