window.BENCHMARK_DATA = {
  "lastUpdate": 1680702214330,
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
          "id": "695d8a7538fa374d9ce0e065713598a897591162",
          "message": "Release 0.53.5",
          "timestamp": "2023-04-05T22:21:46+09:00",
          "tree_id": "7b45ecadf4c2594c5db3e5de0410033bfa7919bc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/695d8a7538fa374d9ce0e065713598a897591162"
        },
        "date": 1680702190023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8461507.57142857,
            "unit": "ns",
            "range": "± 453254.3576518781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21431293.11764706,
            "unit": "ns",
            "range": "± 431838.5289566984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55528881.32394366,
            "unit": "ns",
            "range": "± 2722370.2653262066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111104722.57627119,
            "unit": "ns",
            "range": "± 4142803.029887644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228936816.03278688,
            "unit": "ns",
            "range": "± 9865758.570702547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66794.09782608696,
            "unit": "ns",
            "range": "± 11081.119464869986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239363.62637362638,
            "unit": "ns",
            "range": "± 20064.093306561543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236639.69318181818,
            "unit": "ns",
            "range": "± 20482.23297018688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232499.73626373627,
            "unit": "ns",
            "range": "± 23783.414871542158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14275175.75,
            "unit": "ns",
            "range": "± 957065.8685720863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10865867.958762886,
            "unit": "ns",
            "range": "± 707762.0038848382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25342.601123595505,
            "unit": "ns",
            "range": "± 3484.0557904576453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67531.20786516854,
            "unit": "ns",
            "range": "± 9475.56309576741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60537.22857142857,
            "unit": "ns",
            "range": "± 2923.073124380605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135152.3,
            "unit": "ns",
            "range": "± 21526.211213902272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9793.063829787234,
            "unit": "ns",
            "range": "± 1167.154149077964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25382.563218390806,
            "unit": "ns",
            "range": "± 3036.889181387218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1532443.7,
            "unit": "ns",
            "range": "± 170357.8054608131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856813.796875,
            "unit": "ns",
            "range": "± 131290.96047899782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2449338.09375,
            "unit": "ns",
            "range": "± 217339.51827648433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6256397.875,
            "unit": "ns",
            "range": "± 275520.5950258183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3396626.3383838385,
            "unit": "ns",
            "range": "± 224702.247310075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5313574.551282051,
            "unit": "ns",
            "range": "± 166159.18938269134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26756067.75257732,
            "unit": "ns",
            "range": "± 2189617.7035425855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7113081.382978723,
            "unit": "ns",
            "range": "± 760401.9695412392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33345770.036842104,
            "unit": "ns",
            "range": "± 2120383.1815655436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7614713.1360085225,
            "unit": "ns",
            "range": "± 182495.05405776345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2261059.5118904533,
            "unit": "ns",
            "range": "± 173137.17292126734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409570.1961805555,
            "unit": "ns",
            "range": "± 38613.962666254876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3158546.20851089,
            "unit": "ns",
            "range": "± 256016.7106501725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848736.8706752232,
            "unit": "ns",
            "range": "± 19848.064027662924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757305.5679796007,
            "unit": "ns",
            "range": "± 15973.585276047452"
          }
        ]
      }
    ]
  }
}