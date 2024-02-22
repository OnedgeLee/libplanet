window.BENCHMARK_DATA = {
  "lastUpdate": 1708599977788,
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
          "id": "8bacd4da8cb3e27c89c55455c61f08dc04dcaf8c",
          "message": "Release 4.0.6",
          "timestamp": "2024-02-22T19:49:09+09:00",
          "tree_id": "fee32a6b01e16aac4ea8da9bae064a264cf31dbb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8bacd4da8cb3e27c89c55455c61f08dc04dcaf8c"
        },
        "date": 1708599950395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8104116.936708861,
            "unit": "ns",
            "range": "± 407727.7734710691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20006237.233333334,
            "unit": "ns",
            "range": "± 666080.4056024114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50503006.25757576,
            "unit": "ns",
            "range": "± 1587124.1301059881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98802039.68181819,
            "unit": "ns",
            "range": "± 2370295.1072489927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203109563.54166666,
            "unit": "ns",
            "range": "± 5210821.495391573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46666.89473684211,
            "unit": "ns",
            "range": "± 10818.024354057075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 221523.9010989011,
            "unit": "ns",
            "range": "± 13064.856233469276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216113.29347826086,
            "unit": "ns",
            "range": "± 17270.928466638303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202609.76288659795,
            "unit": "ns",
            "range": "± 18892.100895487376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3968508.5714285714,
            "unit": "ns",
            "range": "± 65348.902897876134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3539500.066666667,
            "unit": "ns",
            "range": "± 47828.0388885412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15748.561855670103,
            "unit": "ns",
            "range": "± 3855.986427552275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72542.90625,
            "unit": "ns",
            "range": "± 10025.704353340572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73920.86082474227,
            "unit": "ns",
            "range": "± 9927.199145724133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78660.14835164836,
            "unit": "ns",
            "range": "± 12040.733138784111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5823.309278350515,
            "unit": "ns",
            "range": "± 1116.5644887408796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17661.298969072166,
            "unit": "ns",
            "range": "± 3976.029589314331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1160816.902173913,
            "unit": "ns",
            "range": "± 132344.4473949136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2519290.5977011495,
            "unit": "ns",
            "range": "± 239724.30520013004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619163.714285714,
            "unit": "ns",
            "range": "± 678254.4223345933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15667436.161616161,
            "unit": "ns",
            "range": "± 5248653.622543982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3001902.9215686275,
            "unit": "ns",
            "range": "± 121024.75973598842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3035314.375,
            "unit": "ns",
            "range": "± 56344.65296946996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3708360.888888889,
            "unit": "ns",
            "range": "± 78010.2718974645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3745843.5,
            "unit": "ns",
            "range": "± 157186.60729999744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16516256.06521739,
            "unit": "ns",
            "range": "± 1896772.3385417205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4615850.800390625,
            "unit": "ns",
            "range": "± 104439.77365092438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1410246.1301912006,
            "unit": "ns",
            "range": "± 48645.81519460009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 899798.535295759,
            "unit": "ns",
            "range": "± 14782.422339570672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2165667.6702553355,
            "unit": "ns",
            "range": "± 114686.85560988494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 659563.9913441051,
            "unit": "ns",
            "range": "± 15082.273596247527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582683.9026227678,
            "unit": "ns",
            "range": "± 3162.408446994251"
          }
        ]
      }
    ]
  }
}