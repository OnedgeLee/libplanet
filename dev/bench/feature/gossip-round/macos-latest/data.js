window.BENCHMARK_DATA = {
  "lastUpdate": 1688136927941,
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
          "id": "71acc5d584de19e5e0622b2b9bc8cd6966cad2bb",
          "message": "feat: Fix gossip to forget only with NewRound",
          "timestamp": "2023-06-30T23:38:10+09:00",
          "tree_id": "eb102d493eedf9889af83dec5cde100aaf559683",
          "url": "https://github.com/OnedgeLee/libplanet/commit/71acc5d584de19e5e0622b2b9bc8cd6966cad2bb"
        },
        "date": 1688136897017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9086467.75609756,
            "unit": "ns",
            "range": "± 480085.26129717764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20653369.85714286,
            "unit": "ns",
            "range": "± 578575.2657196887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53157280.666666664,
            "unit": "ns",
            "range": "± 1573701.2376361687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107313576.93333334,
            "unit": "ns",
            "range": "± 1792217.2027525594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213885966.93333334,
            "unit": "ns",
            "range": "± 1995577.0208896429"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69046.5617977528,
            "unit": "ns",
            "range": "± 6063.189471487789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351450.39361702127,
            "unit": "ns",
            "range": "± 36381.708882472674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331622.9896907217,
            "unit": "ns",
            "range": "± 34521.00411569951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 332415.58904109587,
            "unit": "ns",
            "range": "± 14814.633472080925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259104.023809524,
            "unit": "ns",
            "range": "± 150451.83978290326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3819537.1666666665,
            "unit": "ns",
            "range": "± 45600.52082983681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24479.132183908045,
            "unit": "ns",
            "range": "± 3749.724483258404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129933.49438202247,
            "unit": "ns",
            "range": "± 19363.26020757985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138189.41304347827,
            "unit": "ns",
            "range": "± 17935.252180345142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132965.5625,
            "unit": "ns",
            "range": "± 28621.54247960515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7373.873684210526,
            "unit": "ns",
            "range": "± 543.3562414762307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18623.08988764045,
            "unit": "ns",
            "range": "± 1903.8027175321874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1616895.4175257732,
            "unit": "ns",
            "range": "± 167993.62535987972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3104349.2209302327,
            "unit": "ns",
            "range": "± 154946.04819495388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2131451.6789473686,
            "unit": "ns",
            "range": "± 189758.7961544854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6078043.078947368,
            "unit": "ns",
            "range": "± 294929.3190609693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3430918.080645161,
            "unit": "ns",
            "range": "± 213034.94618745998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3639758.9278350514,
            "unit": "ns",
            "range": "± 277363.4645990726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4668274.757731959,
            "unit": "ns",
            "range": "± 297531.07107540313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4055620.595744681,
            "unit": "ns",
            "range": "± 253956.08812891933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7673130.673913044,
            "unit": "ns",
            "range": "± 587851.1316588264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7030946.670833333,
            "unit": "ns",
            "range": "± 103594.21876059513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2172030.6012834823,
            "unit": "ns",
            "range": "± 30604.219047401377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355395.4775390625,
            "unit": "ns",
            "range": "± 13767.076720015446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2729349.0986328125,
            "unit": "ns",
            "range": "± 52419.122463931286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836937.5600911458,
            "unit": "ns",
            "range": "± 9955.740581208278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801929.9366418087,
            "unit": "ns",
            "range": "± 25031.44290086491"
          }
        ]
      }
    ]
  }
}