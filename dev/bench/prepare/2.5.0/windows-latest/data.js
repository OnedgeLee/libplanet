window.BENCHMARK_DATA = {
  "lastUpdate": 1688388194952,
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
          "id": "495ef9dba3a51dd2535deaaebaf8f05463c913df",
          "message": "Prepare 2.5.0",
          "timestamp": "2023-07-03T21:20:27+09:00",
          "tree_id": "df6b6dca20ffeaf28ae66c872ced0c91410428f3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/495ef9dba3a51dd2535deaaebaf8f05463c913df"
        },
        "date": 1688388138837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672023.6559139786,
            "unit": "ns",
            "range": "± 124064.97105553506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3121591.935483871,
            "unit": "ns",
            "range": "± 141435.8584837839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2124636.559139785,
            "unit": "ns",
            "range": "± 119909.2698531996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5552104,
            "unit": "ns",
            "range": "± 142414.78586626225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59070.4081632653,
            "unit": "ns",
            "range": "± 4828.848215611794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8921686.666666666,
            "unit": "ns",
            "range": "± 334319.9478724752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24415350,
            "unit": "ns",
            "range": "± 552400.2316729972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60238538.461538464,
            "unit": "ns",
            "range": "± 1000984.4600346049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123109631.25,
            "unit": "ns",
            "range": "± 2307502.1307953326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247796812.5,
            "unit": "ns",
            "range": "± 6435671.46196562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5761795.089285715,
            "unit": "ns",
            "range": "± 63712.073571129076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910549.19921875,
            "unit": "ns",
            "range": "± 29012.929878123563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1448150.78125,
            "unit": "ns",
            "range": "± 32020.58840611527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3157504.7265625,
            "unit": "ns",
            "range": "± 45981.28921774076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978065.33203125,
            "unit": "ns",
            "range": "± 10058.193099269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 936026.9205729166,
            "unit": "ns",
            "range": "± 17108.815668056348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3838074.074074074,
            "unit": "ns",
            "range": "± 106791.57843702483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4032108,
            "unit": "ns",
            "range": "± 160208.2558447483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4981613.513513514,
            "unit": "ns",
            "range": "± 164736.76672896158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4408213.235294118,
            "unit": "ns",
            "range": "± 210444.53866057727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7329063.157894737,
            "unit": "ns",
            "range": "± 252670.9369709112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304571.0144927536,
            "unit": "ns",
            "range": "± 14642.425279758689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298006.52173913043,
            "unit": "ns",
            "range": "± 18774.262276651225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275832.5842696629,
            "unit": "ns",
            "range": "± 15222.148749892069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4873140,
            "unit": "ns",
            "range": "± 90701.32933346204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4483333.333333333,
            "unit": "ns",
            "range": "± 131498.28983635132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22940.625,
            "unit": "ns",
            "range": "± 1998.0821396634587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103139.56043956045,
            "unit": "ns",
            "range": "± 5874.613540402828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85681.31868131868,
            "unit": "ns",
            "range": "± 7114.131665415629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113605.20833333333,
            "unit": "ns",
            "range": "± 17079.805679849036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6235.714285714285,
            "unit": "ns",
            "range": "± 1131.575855842538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21836.559139784946,
            "unit": "ns",
            "range": "± 1996.0169548289082"
          }
        ]
      }
    ]
  }
}