window.BENCHMARK_DATA = {
  "lastUpdate": 1702364843294,
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
          "id": "a52b5d8aafec4a715a2d72a7e6a0e7ae826b337d",
          "message": "Merge tag '3.9.1' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.1",
          "timestamp": "2023-12-12T13:00:47+09:00",
          "tree_id": "bdc4cf32fcc1981925da19166e015cf11ccac18f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a52b5d8aafec4a715a2d72a7e6a0e7ae826b337d"
        },
        "date": 1702354759367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7713092.1,
            "unit": "ns",
            "range": "± 174737.86519057024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18736591.384615384,
            "unit": "ns",
            "range": "± 179060.1391383811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45912513.07692308,
            "unit": "ns",
            "range": "± 468882.40053885255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95400062.5,
            "unit": "ns",
            "range": "± 1774736.0615155064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190806226.94117647,
            "unit": "ns",
            "range": "± 3910091.7928753844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33346.32142857143,
            "unit": "ns",
            "range": "± 2031.8296767194672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223779.95744680852,
            "unit": "ns",
            "range": "± 22295.093260705282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212211.13541666666,
            "unit": "ns",
            "range": "± 15747.169108409224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184690.82692307694,
            "unit": "ns",
            "range": "± 7246.045195101739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3828559.1666666665,
            "unit": "ns",
            "range": "± 59218.379092418036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3430454.4411764704,
            "unit": "ns",
            "range": "± 67626.23025541808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12378.662790697674,
            "unit": "ns",
            "range": "± 687.1020749660917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57144.48936170213,
            "unit": "ns",
            "range": "± 4135.706489410519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52140.22077922078,
            "unit": "ns",
            "range": "± 2666.2445530004647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59305.08947368421,
            "unit": "ns",
            "range": "± 8888.891152749027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3260.6067415730336,
            "unit": "ns",
            "range": "± 410.79140963116794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11914.3,
            "unit": "ns",
            "range": "± 1201.0403771898968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033248.7333333333,
            "unit": "ns",
            "range": "± 74056.16411124675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2198878.407407407,
            "unit": "ns",
            "range": "± 115197.01595188759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1813279.3958333333,
            "unit": "ns",
            "range": "± 187616.47509777852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19077501.673913043,
            "unit": "ns",
            "range": "± 2488848.3496737964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3163498.5714285714,
            "unit": "ns",
            "range": "± 38715.80501445866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2971134.5945945946,
            "unit": "ns",
            "range": "± 148256.3363400839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3542638.787878788,
            "unit": "ns",
            "range": "± 109448.47955766607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3714997.64516129,
            "unit": "ns",
            "range": "± 167302.77282131306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22339198.98924731,
            "unit": "ns",
            "range": "± 3346675.823194157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4332718.604166667,
            "unit": "ns",
            "range": "± 79038.35562829187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1373477.4204427083,
            "unit": "ns",
            "range": "± 19664.92935421184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 868992.33203125,
            "unit": "ns",
            "range": "± 18245.60850951912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967836.927734375,
            "unit": "ns",
            "range": "± 31796.73239935232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630887.9208984375,
            "unit": "ns",
            "range": "± 9293.643211013541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565029.36640625,
            "unit": "ns",
            "range": "± 10287.368946991523"
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
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "6e81f26463650a63ab15fa2bf73a681f6c20867c",
          "message": "Merge tag '3.9.1' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.1",
          "timestamp": "2023-12-12T15:47:51+09:00",
          "tree_id": "bdc4cf32fcc1981925da19166e015cf11ccac18f",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6e81f26463650a63ab15fa2bf73a681f6c20867c"
        },
        "date": 1702364819239,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8433430.158536585,
            "unit": "ns",
            "range": "± 291987.21162181144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21799532.73809524,
            "unit": "ns",
            "range": "± 712433.3769100477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51698876.2,
            "unit": "ns",
            "range": "± 1338525.8128687695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104110508.85714285,
            "unit": "ns",
            "range": "± 1062987.1633785944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213441792.1,
            "unit": "ns",
            "range": "± 3308370.4935702714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68282.10989010989,
            "unit": "ns",
            "range": "± 8651.075595876373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320351.6595744681,
            "unit": "ns",
            "range": "± 25116.655453566796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313571.293814433,
            "unit": "ns",
            "range": "± 32626.396925693127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304524.25263157894,
            "unit": "ns",
            "range": "± 28112.295232017146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4558659.715909091,
            "unit": "ns",
            "range": "± 293751.2698956928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3809389.359375,
            "unit": "ns",
            "range": "± 176166.17517162298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19637.05319148936,
            "unit": "ns",
            "range": "± 2503.78409361966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89709.65217391304,
            "unit": "ns",
            "range": "± 12456.103352326578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101241.02061855671,
            "unit": "ns",
            "range": "± 19261.338495145406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100601.32989690722,
            "unit": "ns",
            "range": "± 19035.526053672234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5139.663157894737,
            "unit": "ns",
            "range": "± 963.4627112497113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16728.30769230769,
            "unit": "ns",
            "range": "± 1544.6838489355657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481060.4226804124,
            "unit": "ns",
            "range": "± 164001.50784709744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2806952.60989011,
            "unit": "ns",
            "range": "± 168047.69448915718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2590954.783505155,
            "unit": "ns",
            "range": "± 224152.33314888348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 26937923.458333332,
            "unit": "ns",
            "range": "± 3224112.116332494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3486862.536082474,
            "unit": "ns",
            "range": "± 218034.94048092875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3361708.211340206,
            "unit": "ns",
            "range": "± 195055.1816174378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4331345.702380952,
            "unit": "ns",
            "range": "± 230919.77167237893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4681977.521052632,
            "unit": "ns",
            "range": "± 324148.6428838572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32462776.075757574,
            "unit": "ns",
            "range": "± 4112795.32220722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6277396.4717300255,
            "unit": "ns",
            "range": "± 451520.63396463543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1733228.869419643,
            "unit": "ns",
            "range": "± 22667.081735915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1129410.7622395833,
            "unit": "ns",
            "range": "± 18552.628248229226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583786.4453125,
            "unit": "ns",
            "range": "± 36262.11658992819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806187.8923828125,
            "unit": "ns",
            "range": "± 11795.778706814735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752129.7333984375,
            "unit": "ns",
            "range": "± 11360.046780459126"
          }
        ]
      }
    ]
  }
}