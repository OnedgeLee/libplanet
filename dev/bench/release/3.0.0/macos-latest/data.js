window.BENCHMARK_DATA = {
  "lastUpdate": 1689753763220,
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
          "id": "118891154eab9863287035e85aa4bc8e727db0c7",
          "message": "Release 3.0.0",
          "timestamp": "2023-07-19T16:41:07+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/118891154eab9863287035e85aa4bc8e727db0c7"
        },
        "date": 1689753706512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8851584.470588235,
            "unit": "ns",
            "range": "± 403645.709713726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22706449.3,
            "unit": "ns",
            "range": "± 2580894.687055047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55101864.35,
            "unit": "ns",
            "range": "± 2449035.5213171258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107461090.85714285,
            "unit": "ns",
            "range": "± 2551064.8402497787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223850085.5,
            "unit": "ns",
            "range": "± 3628448.9789702743"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71573.19354838709,
            "unit": "ns",
            "range": "± 8491.95473510083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357099.77419354836,
            "unit": "ns",
            "range": "± 31105.141653517894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344689.3298969072,
            "unit": "ns",
            "range": "± 42401.741820973984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316241.325,
            "unit": "ns",
            "range": "± 10976.168611079467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4251018.540540541,
            "unit": "ns",
            "range": "± 139733.00729716945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795690.7701149425,
            "unit": "ns",
            "range": "± 278587.3663129797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19782.582417582416,
            "unit": "ns",
            "range": "± 2857.944685204286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99715,
            "unit": "ns",
            "range": "± 13476.404741543447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106993.11458333333,
            "unit": "ns",
            "range": "± 6467.380750829983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111791.15053763441,
            "unit": "ns",
            "range": "± 9163.86203465196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7358.764705882353,
            "unit": "ns",
            "range": "± 582.1087823197495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23149.203296703297,
            "unit": "ns",
            "range": "± 3755.5398886755893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640017.855670103,
            "unit": "ns",
            "range": "± 161699.81452956467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935666.272727273,
            "unit": "ns",
            "range": "± 123058.71099412406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2101848,
            "unit": "ns",
            "range": "± 200198.8165217136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5926038.8,
            "unit": "ns",
            "range": "± 308795.21952624735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3687600.4583333335,
            "unit": "ns",
            "range": "± 370087.6766819314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3833749.7684210525,
            "unit": "ns",
            "range": "± 367165.18168479245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4723012.222222222,
            "unit": "ns",
            "range": "± 382241.93678976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4149927.1551724137,
            "unit": "ns",
            "range": "± 179059.43762561094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7707628.051020408,
            "unit": "ns",
            "range": "± 607959.9444491392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7678339.9696875,
            "unit": "ns",
            "range": "± 202772.16916271904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2138222.4032907197,
            "unit": "ns",
            "range": "± 67623.11777164505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394155.680434283,
            "unit": "ns",
            "range": "± 27076.26078064654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2904554.25677413,
            "unit": "ns",
            "range": "± 150465.13426572134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 885160.1005371094,
            "unit": "ns",
            "range": "± 19551.17528809229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835499.8164645522,
            "unit": "ns",
            "range": "± 39539.85457706479"
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
          "id": "6ac00fec812c500b6a9734071c3d3fac2436c0b1",
          "message": "Release 3.0.0\n\nSince commit d4b7fb4ddff53907b8e97d43c7928e32147fd3bf doesn't update\nproject version, this commit has been added.",
          "timestamp": "2023-07-19T16:42:26+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6ac00fec812c500b6a9734071c3d3fac2436c0b1"
        },
        "date": 1689753730689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10210292.265957447,
            "unit": "ns",
            "range": "± 2436515.9413116183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21869227.095238097,
            "unit": "ns",
            "range": "± 973998.7874053642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52023854.7972973,
            "unit": "ns",
            "range": "± 1549937.3929523171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102406906.55882353,
            "unit": "ns",
            "range": "± 1993843.3116728815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221255008.07142857,
            "unit": "ns",
            "range": "± 3717092.4088713727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68703.55789473685,
            "unit": "ns",
            "range": "± 10722.313390344525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353904.74226804124,
            "unit": "ns",
            "range": "± 53898.84034433517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331520.59375,
            "unit": "ns",
            "range": "± 36530.35791087163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328554.84408602153,
            "unit": "ns",
            "range": "± 27380.62899541692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4264304.807692308,
            "unit": "ns",
            "range": "± 114301.28586005294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3762430.08,
            "unit": "ns",
            "range": "± 98509.84448517484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21123.956521739132,
            "unit": "ns",
            "range": "± 4689.240171147588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94391.05154639175,
            "unit": "ns",
            "range": "± 13783.990247876893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110168.67021276595,
            "unit": "ns",
            "range": "± 8300.062810214858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110174.18478260869,
            "unit": "ns",
            "range": "± 13905.368208337248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5735.021052631579,
            "unit": "ns",
            "range": "± 875.239577887682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20768.042105263157,
            "unit": "ns",
            "range": "± 5337.938134722355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638001.6818181819,
            "unit": "ns",
            "range": "± 211199.69735596757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978095.8421052634,
            "unit": "ns",
            "range": "± 150474.17869903153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091034.175257732,
            "unit": "ns",
            "range": "± 162449.31911759757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5818765.425925926,
            "unit": "ns",
            "range": "± 244369.52047509988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3466143.6612903224,
            "unit": "ns",
            "range": "± 235899.2189588085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631381.644329897,
            "unit": "ns",
            "range": "± 285414.8572080717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4680283.5612244895,
            "unit": "ns",
            "range": "± 282850.5552719143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4143934.59375,
            "unit": "ns",
            "range": "± 394198.9872905781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7492394.260869565,
            "unit": "ns",
            "range": "± 425976.71220657916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7592591.113541666,
            "unit": "ns",
            "range": "± 338502.59163391776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2200457.814797794,
            "unit": "ns",
            "range": "± 43119.21434316568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373821.141751803,
            "unit": "ns",
            "range": "± 36273.28189927839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3316425.3920898438,
            "unit": "ns",
            "range": "± 62663.21406878068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 880131.9762137277,
            "unit": "ns",
            "range": "± 9197.256322472973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785337.62265625,
            "unit": "ns",
            "range": "± 9885.295378152121"
          }
        ]
      }
    ]
  }
}