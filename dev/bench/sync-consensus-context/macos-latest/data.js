window.BENCHMARK_DATA = {
  "lastUpdate": 1681957866850,
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
          "id": "d6d87834a170b07dd60f9311efe37295800a4c4e",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-20T11:15:04+09:00",
          "tree_id": "aa4baf5796af7f658859b22d9da95ce319e15ac9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d6d87834a170b07dd60f9311efe37295800a4c4e"
        },
        "date": 1681957816980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8169282.766666667,
            "unit": "ns",
            "range": "± 149319.413462008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19909694.61764706,
            "unit": "ns",
            "range": "± 404132.1764971954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48816062.5,
            "unit": "ns",
            "range": "± 1313758.5131151082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99451133.05263157,
            "unit": "ns",
            "range": "± 2140525.9705664106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197811992.0652174,
            "unit": "ns",
            "range": "± 9533211.355107708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57615.30434782609,
            "unit": "ns",
            "range": "± 6156.122567914782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388059.887755102,
            "unit": "ns",
            "range": "± 31769.468330095828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307959.9791666667,
            "unit": "ns",
            "range": "± 21822.329650819484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309281.6875,
            "unit": "ns",
            "range": "± 24631.942759592515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5619617.625,
            "unit": "ns",
            "range": "± 86142.37673439246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3857958.8666666667,
            "unit": "ns",
            "range": "± 71447.53456894754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24516.77659574468,
            "unit": "ns",
            "range": "± 3438.1751728855165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108200.81720430107,
            "unit": "ns",
            "range": "± 18714.833795069946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113346.42783505155,
            "unit": "ns",
            "range": "± 14433.761886377875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118736.58762886598,
            "unit": "ns",
            "range": "± 17670.447592515742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6475.516483516483,
            "unit": "ns",
            "range": "± 1820.6864600574108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17171.123595505618,
            "unit": "ns",
            "range": "± 2833.3282541763842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1553649.112244898,
            "unit": "ns",
            "range": "± 175216.69982522185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989267.304347826,
            "unit": "ns",
            "range": "± 206965.68766331853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2406121.09375,
            "unit": "ns",
            "range": "± 149971.65046326365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6607701.689189189,
            "unit": "ns",
            "range": "± 329248.04738363496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3732674.7721518986,
            "unit": "ns",
            "range": "± 192723.93370762825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3325310,
            "unit": "ns",
            "range": "± 105256.77235311332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4505717.821428572,
            "unit": "ns",
            "range": "± 190411.82494115765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4470955.286516854,
            "unit": "ns",
            "range": "± 245996.01799786554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8442431.37735849,
            "unit": "ns",
            "range": "± 233886.07490517086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6361346.64453125,
            "unit": "ns",
            "range": "± 120021.29186368837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863559.24453125,
            "unit": "ns",
            "range": "± 8259.236368714315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299696.2160993305,
            "unit": "ns",
            "range": "± 15433.358829028684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2524390.927619485,
            "unit": "ns",
            "range": "± 51071.1237222083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 779833.8904622396,
            "unit": "ns",
            "range": "± 15872.01052819357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719920.6859375,
            "unit": "ns",
            "range": "± 8285.839651601453"
          }
        ]
      }
    ]
  }
}