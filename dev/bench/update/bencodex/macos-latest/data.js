window.BENCHMARK_DATA = {
  "lastUpdate": 1681887202306,
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
          "id": "45ac42e9e3775906656a12287367ce0ceee11123",
          "message": "update: bencodex 0.9.0",
          "timestamp": "2023-04-19T15:30:06+09:00",
          "tree_id": "dc212b25fb943314b7110477bccabe5faf5dfa8c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45ac42e9e3775906656a12287367ce0ceee11123"
        },
        "date": 1681887171260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8173745.411764706,
            "unit": "ns",
            "range": "± 163636.60795152886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20569053.98245614,
            "unit": "ns",
            "range": "± 886005.7693059198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50268812.27027027,
            "unit": "ns",
            "range": "± 1352363.9952976098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102491067.625,
            "unit": "ns",
            "range": "± 2580569.156102412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211327617.52,
            "unit": "ns",
            "range": "± 8534125.650719551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68293.4255319149,
            "unit": "ns",
            "range": "± 10489.5796252674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 473064.2291666667,
            "unit": "ns",
            "range": "± 68857.49023591432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359434.81111111114,
            "unit": "ns",
            "range": "± 37164.32081497088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336927.93548387097,
            "unit": "ns",
            "range": "± 10109.019055396304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5751620.255555555,
            "unit": "ns",
            "range": "± 324889.9820466304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3880311.4591836734,
            "unit": "ns",
            "range": "± 275204.6206023153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24391.188235294117,
            "unit": "ns",
            "range": "± 3246.0204334880345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128785.41111111111,
            "unit": "ns",
            "range": "± 23846.921919428845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138814.70652173914,
            "unit": "ns",
            "range": "± 21582.747774700296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157174.3085106383,
            "unit": "ns",
            "range": "± 30046.71984639012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8384.926315789473,
            "unit": "ns",
            "range": "± 1864.7554356908063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21699.563157894736,
            "unit": "ns",
            "range": "± 4942.74888375725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770238.7173913044,
            "unit": "ns",
            "range": "± 268584.43828675064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3490506.7282608696,
            "unit": "ns",
            "range": "± 413574.0151769241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2964039.033707865,
            "unit": "ns",
            "range": "± 369833.36939416657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7815972.9772727275,
            "unit": "ns",
            "range": "± 851220.5435386469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3316494.1408450706,
            "unit": "ns",
            "range": "± 162719.1351306465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625927.1208791207,
            "unit": "ns",
            "range": "± 290746.30157035665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4804111.9,
            "unit": "ns",
            "range": "± 341023.79991323745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4697720.2558139535,
            "unit": "ns",
            "range": "± 253892.8618500302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9536591.53125,
            "unit": "ns",
            "range": "± 808769.4288967837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7115115.041852678,
            "unit": "ns",
            "range": "± 233756.87684968908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059201.2564453124,
            "unit": "ns",
            "range": "± 44770.738547954425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1524326.5015980115,
            "unit": "ns",
            "range": "± 90602.5996050309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3340843.1232421873,
            "unit": "ns",
            "range": "± 302779.2144258718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802342.6690104167,
            "unit": "ns",
            "range": "± 3782.631931879202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732040.2886117789,
            "unit": "ns",
            "range": "± 2401.6168906532916"
          }
        ]
      }
    ]
  }
}