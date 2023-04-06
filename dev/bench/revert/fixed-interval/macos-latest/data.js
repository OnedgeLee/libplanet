window.BENCHMARK_DATA = {
  "lastUpdate": 1680752336245,
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
          "id": "f72fd58a9c9a44636e626e85bde13d9cf13d87c4",
          "message": "Revert \"Merge pull request #3063 from OnedgeLee/feature/fixed-interval\"\n\nThis reverts commit 5a6f1997de3b3fb1fab9f50ef160906b3247a8d8, reversing\nchanges made to 6c17ac655f9eb8f0c8736b0d27181c362fd90c54.",
          "timestamp": "2023-04-06T12:11:53+09:00",
          "tree_id": "850e11d88531cbbc0c209aaf41b24521711480e5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f72fd58a9c9a44636e626e85bde13d9cf13d87c4"
        },
        "date": 1680752311166,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8690003.547619049,
            "unit": "ns",
            "range": "± 448888.0837068788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22045819.943181816,
            "unit": "ns",
            "range": "± 2322946.9912443953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55493219.96875,
            "unit": "ns",
            "range": "± 4555557.135090943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115495514.08064516,
            "unit": "ns",
            "range": "± 11448150.54080232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235396268.9888889,
            "unit": "ns",
            "range": "± 14548264.863576986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70931.36559139784,
            "unit": "ns",
            "range": "± 9128.644708428312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248823.58695652173,
            "unit": "ns",
            "range": "± 41917.39151905311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239208.03333333333,
            "unit": "ns",
            "range": "± 25123.51344507211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228945.70967741936,
            "unit": "ns",
            "range": "± 25086.099993899552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14320907.378947368,
            "unit": "ns",
            "range": "± 1028718.0646539176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10851350.30927835,
            "unit": "ns",
            "range": "± 650918.8445885292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22158.933333333334,
            "unit": "ns",
            "range": "± 3738.590570814057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61554.572164948455,
            "unit": "ns",
            "range": "± 11832.311748667487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58741.663043478264,
            "unit": "ns",
            "range": "± 5526.3557021559045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126503.61578947368,
            "unit": "ns",
            "range": "± 20663.892318287217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7619.45744680851,
            "unit": "ns",
            "range": "± 793.33962564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20521.021276595744,
            "unit": "ns",
            "range": "± 3281.2695286996072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645446.1666666667,
            "unit": "ns",
            "range": "± 140920.62588603684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3047421.625,
            "unit": "ns",
            "range": "± 281491.6742723297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2793544.7209302327,
            "unit": "ns",
            "range": "± 324013.11671687005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6767986.517241379,
            "unit": "ns",
            "range": "± 611714.5096052772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3799332.5,
            "unit": "ns",
            "range": "± 528441.0575903817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5658656.354166667,
            "unit": "ns",
            "range": "± 549006.912165977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27522263.902173914,
            "unit": "ns",
            "range": "± 2967895.8676868654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6985738.455555555,
            "unit": "ns",
            "range": "± 909739.7904960493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 41305811.47802198,
            "unit": "ns",
            "range": "± 8176373.315394596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7115891.8859375,
            "unit": "ns",
            "range": "± 249045.14479738902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2197751.9741097386,
            "unit": "ns",
            "range": "± 80810.37927286516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1426090.2158954327,
            "unit": "ns",
            "range": "± 20717.51963783247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3286236.094333924,
            "unit": "ns",
            "range": "± 204143.6672227783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882911.9044921875,
            "unit": "ns",
            "range": "± 16302.182431897943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829484.5245768229,
            "unit": "ns",
            "range": "± 30036.238444523366"
          }
        ]
      }
    ]
  }
}