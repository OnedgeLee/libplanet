window.BENCHMARK_DATA = {
  "lastUpdate": 1698646702559,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "8bb8d9f5d0ee7a07379bf438468f71b5c0cbb152",
          "message": "Prepare 3.7.1",
          "timestamp": "2023-10-27T22:36:50+09:00",
          "tree_id": "906c251257e5839a835901c66606efc8b56c15ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8bb8d9f5d0ee7a07379bf438468f71b5c0cbb152"
        },
        "date": 1698414809619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57987.09782608696,
            "unit": "ns",
            "range": "± 3147.0807127086705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6271354.7453125,
            "unit": "ns",
            "range": "± 25978.59469193002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953319.275390625,
            "unit": "ns",
            "range": "± 4643.797681694933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387589.4322916667,
            "unit": "ns",
            "range": "± 5837.23844965533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3104918.960677083,
            "unit": "ns",
            "range": "± 10863.832076688625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 984026.8395833333,
            "unit": "ns",
            "range": "± 6412.024870463476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902344.5699869791,
            "unit": "ns",
            "range": "± 3630.986288612366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10578244.153846154,
            "unit": "ns",
            "range": "± 118948.24962131372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27050190.466666665,
            "unit": "ns",
            "range": "± 251238.85004054455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68176751.35714285,
            "unit": "ns",
            "range": "± 325286.1117895603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136264750.26666668,
            "unit": "ns",
            "range": "± 540094.5128052612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271942434.4285714,
            "unit": "ns",
            "range": "± 1084345.1800123225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4351878.0322580645,
            "unit": "ns",
            "range": "± 132639.3383800557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4529596.985915493,
            "unit": "ns",
            "range": "± 220610.24414917125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5385443.944444444,
            "unit": "ns",
            "range": "± 89310.7661611457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5260675.696428572,
            "unit": "ns",
            "range": "± 208825.06622833814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12883898.11627907,
            "unit": "ns",
            "range": "± 422843.47368546546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334176,
            "unit": "ns",
            "range": "± 6840.784664315155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321163.18,
            "unit": "ns",
            "range": "± 11322.375512791168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305949.5142857143,
            "unit": "ns",
            "range": "± 10018.572609882896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5362132.6,
            "unit": "ns",
            "range": "± 51897.43990355264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4972797.333333333,
            "unit": "ns",
            "range": "± 33441.40783662133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25939,
            "unit": "ns",
            "range": "± 2432.3096332855966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108680.62244897959,
            "unit": "ns",
            "range": "± 12330.608979464043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91790.51041666667,
            "unit": "ns",
            "range": "± 6029.347039788483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105383.48453608247,
            "unit": "ns",
            "range": "± 9448.221532508778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7586.84693877551,
            "unit": "ns",
            "range": "± 1112.7761174966618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25382.127659574468,
            "unit": "ns",
            "range": "± 1915.7395451974085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1606749.168539326,
            "unit": "ns",
            "range": "± 92142.83948123401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3230250.5714285714,
            "unit": "ns",
            "range": "± 126522.27693341859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2457680.7702702703,
            "unit": "ns",
            "range": "± 107804.94591515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10676061.243243244,
            "unit": "ns",
            "range": "± 360858.179818102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "2eb7e615207b1247d57e79d0ade71206b88f242a",
          "message": "Prepare 3.7.1",
          "timestamp": "2023-10-30T14:59:41+09:00",
          "tree_id": "128822e516289030ef4a4d75fb9f83ebcd06916b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/2eb7e615207b1247d57e79d0ade71206b88f242a"
        },
        "date": 1698646689181,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55016.46666666667,
            "unit": "ns",
            "range": "± 4685.946457946523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5798357.925037202,
            "unit": "ns",
            "range": "± 137022.95474464254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1733177.1228966345,
            "unit": "ns",
            "range": "± 59325.564140105416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316871.2364908855,
            "unit": "ns",
            "range": "± 33578.954332411966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2751035.235894097,
            "unit": "ns",
            "range": "± 104248.97694625655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858811.2455842391,
            "unit": "ns",
            "range": "± 21538.48970330308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788232.9491796875,
            "unit": "ns",
            "range": "± 31683.86811951216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8217864.96,
            "unit": "ns",
            "range": "± 547529.3709109492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21951397.426666666,
            "unit": "ns",
            "range": "± 1107531.0010097476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55195254.79,
            "unit": "ns",
            "range": "± 3845520.376162653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118233835.06896552,
            "unit": "ns",
            "range": "± 4893682.923486772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236670497.9262295,
            "unit": "ns",
            "range": "± 10517754.499972126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3623419.97,
            "unit": "ns",
            "range": "± 270055.1897491204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3898483.5204081633,
            "unit": "ns",
            "range": "± 273655.4582296713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4749239.305882353,
            "unit": "ns",
            "range": "± 256192.4951099142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4772746.2,
            "unit": "ns",
            "range": "± 280681.5468316686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11962592.416666666,
            "unit": "ns",
            "range": "± 589570.5722514911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295090.0202020202,
            "unit": "ns",
            "range": "± 23741.21205190386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286441.05263157893,
            "unit": "ns",
            "range": "± 23910.039040149135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258260.31313131313,
            "unit": "ns",
            "range": "± 21518.502109905552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4897297.48,
            "unit": "ns",
            "range": "± 289534.60055550863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4348587.6,
            "unit": "ns",
            "range": "± 248161.2684325478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20526.18888888889,
            "unit": "ns",
            "range": "± 1879.7179736729959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94036.16842105263,
            "unit": "ns",
            "range": "± 7913.051100303437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79731.625,
            "unit": "ns",
            "range": "± 6417.577348086906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88012.73469387754,
            "unit": "ns",
            "range": "± 12410.698526201835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5105.623529411765,
            "unit": "ns",
            "range": "± 453.29468435924457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20573.279569892475,
            "unit": "ns",
            "range": "± 2616.269545370774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484655.755319149,
            "unit": "ns",
            "range": "± 140006.0872868376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2946776.275510204,
            "unit": "ns",
            "range": "± 225431.29906364207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235690.505263158,
            "unit": "ns",
            "range": "± 175265.04350292566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10526749.10989011,
            "unit": "ns",
            "range": "± 703990.9322096013"
          }
        ]
      }
    ]
  }
}