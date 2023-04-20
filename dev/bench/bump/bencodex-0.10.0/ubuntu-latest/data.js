window.BENCHMARK_DATA = {
  "lastUpdate": 1681976783016,
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
          "id": "0ba58523a304018327bc4ba1fd68ef209f9a0a67",
          "message": "bump: bencodex 0.10.0",
          "timestamp": "2023-04-20T16:30:40+09:00",
          "tree_id": "b543dcdad7d8051aefddb2ac30429cfdfe34709c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0ba58523a304018327bc4ba1fd68ef209f9a0a67"
        },
        "date": 1681976717169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8460119.2,
            "unit": "ns",
            "range": "± 155287.65317776278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21700878.46153846,
            "unit": "ns",
            "range": "± 104054.69958601533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55294720.86666667,
            "unit": "ns",
            "range": "± 290981.4171948017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112128476.33333333,
            "unit": "ns",
            "range": "± 504073.1169032166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221920148.06666666,
            "unit": "ns",
            "range": "± 811680.9111948282"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49984.663157894734,
            "unit": "ns",
            "range": "± 4099.56445172423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507962.112244898,
            "unit": "ns",
            "range": "± 98007.261097285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2751429.685714286,
            "unit": "ns",
            "range": "± 85762.5083817383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2431400.675,
            "unit": "ns",
            "range": "± 123821.41324512342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5942182.76,
            "unit": "ns",
            "range": "± 157476.51859676308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5907853.902083334,
            "unit": "ns",
            "range": "± 37903.70852581705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840689.7590680805,
            "unit": "ns",
            "range": "± 1647.748357164827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355159.2033854167,
            "unit": "ns",
            "range": "± 3841.041180843086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2741976.99296875,
            "unit": "ns",
            "range": "± 14689.123461950592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836360.3748697917,
            "unit": "ns",
            "range": "± 936.130378250559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767608.5298828125,
            "unit": "ns",
            "range": "± 405.46650746417913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368303.04347826086,
            "unit": "ns",
            "range": "± 9000.161617125957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291502.5,
            "unit": "ns",
            "range": "± 9174.789208124268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245347.2258064516,
            "unit": "ns",
            "range": "± 11178.00122227694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5903630.333333333,
            "unit": "ns",
            "range": "± 47271.70733969235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3900932.4,
            "unit": "ns",
            "range": "± 43036.59888447108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24243.4,
            "unit": "ns",
            "range": "± 2333.227799842409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103221.79120879121,
            "unit": "ns",
            "range": "± 7826.326562054631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84173.23469387754,
            "unit": "ns",
            "range": "± 6678.282598851604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117573.18556701031,
            "unit": "ns",
            "range": "± 13454.858232971943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7272.540816326531,
            "unit": "ns",
            "range": "± 775.0817471800622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23163.34736842105,
            "unit": "ns",
            "range": "± 1994.2022175382542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3676198.6666666665,
            "unit": "ns",
            "range": "± 36126.4692606141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3867569.285714286,
            "unit": "ns",
            "range": "± 52004.5261172652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4508819.714285715,
            "unit": "ns",
            "range": "± 105529.0759042942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782421.047619048,
            "unit": "ns",
            "range": "± 174751.70512541954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7551663.6,
            "unit": "ns",
            "range": "± 133310.4986267559"
          }
        ]
      },
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
          "id": "20680e31aeee6be1cfcf2a421141eef40ff3b5da",
          "message": "bump: bencodex 0.10.0",
          "timestamp": "2023-04-20T16:32:13+09:00",
          "tree_id": "2098680d696851b4e5c2dbbd2b802a56b919da11",
          "url": "https://github.com/OnedgeLee/libplanet/commit/20680e31aeee6be1cfcf2a421141eef40ff3b5da"
        },
        "date": 1681976770221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7848052.153846154,
            "unit": "ns",
            "range": "± 98245.45757170842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21630523.066666666,
            "unit": "ns",
            "range": "± 196755.59494584962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54994295,
            "unit": "ns",
            "range": "± 102177.31619172065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109391623.2,
            "unit": "ns",
            "range": "± 691039.9325823777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218937480.66666666,
            "unit": "ns",
            "range": "± 1029468.1157035598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49168.65979381443,
            "unit": "ns",
            "range": "± 3073.411154179905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393566.0476190476,
            "unit": "ns",
            "range": "± 74775.09519337589"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651219.3333333335,
            "unit": "ns",
            "range": "± 52941.60554799977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2275842.6352941175,
            "unit": "ns",
            "range": "± 122530.06900279496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5401442.666666667,
            "unit": "ns",
            "range": "± 126102.54749739727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5865006.783333333,
            "unit": "ns",
            "range": "± 26436.987326628587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835689.6845052084,
            "unit": "ns",
            "range": "± 654.1390016837506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374618.1188802083,
            "unit": "ns",
            "range": "± 2317.8729165116233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606291.2273995536,
            "unit": "ns",
            "range": "± 1905.5122519900456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835231.8209885817,
            "unit": "ns",
            "range": "± 268.86698913770397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765784.0884486607,
            "unit": "ns",
            "range": "± 314.1035022258105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342873.652173913,
            "unit": "ns",
            "range": "± 8513.356936488875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282923.42,
            "unit": "ns",
            "range": "± 11349.50306579139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243364.57142857142,
            "unit": "ns",
            "range": "± 6811.41872114092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5816810.8,
            "unit": "ns",
            "range": "± 43632.84022745123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3919274.2,
            "unit": "ns",
            "range": "± 37017.96157890306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20881.021276595744,
            "unit": "ns",
            "range": "± 1557.3362906331706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95278.67021276595,
            "unit": "ns",
            "range": "± 5418.15123289707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84409.32291666667,
            "unit": "ns",
            "range": "± 5286.787058307754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111988.40625,
            "unit": "ns",
            "range": "± 11762.330421242503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6573.763157894737,
            "unit": "ns",
            "range": "± 745.8629046710861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18918.115789473683,
            "unit": "ns",
            "range": "± 1478.6043006631387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3486430,
            "unit": "ns",
            "range": "± 60178.6327825037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3752621.21875,
            "unit": "ns",
            "range": "± 112299.61216683508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4284898.071428572,
            "unit": "ns",
            "range": "± 65363.66875291395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4648869.319148936,
            "unit": "ns",
            "range": "± 171351.41387449135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7347310.666666667,
            "unit": "ns",
            "range": "± 128335.1707614906"
          }
        ]
      }
    ]
  }
}