window.BENCHMARK_DATA = {
  "lastUpdate": 1702342613510,
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
          "id": "7ac534e31f659ecb30de1ef01da73e3233cf06d0",
          "message": "test: Replace <T> with IActionLoader param",
          "timestamp": "2023-12-05T08:13:56+09:00",
          "tree_id": "44c43ad053606bbc2e73640a0517240d3dcd1890",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7ac534e31f659ecb30de1ef01da73e3233cf06d0"
        },
        "date": 1701732581785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194481.63888888888,
            "unit": "ns",
            "range": "± 6424.6689393430015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189149.5,
            "unit": "ns",
            "range": "± 8256.231817699052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169340.7027027027,
            "unit": "ns",
            "range": "± 5645.839632787948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3217356.2666666666,
            "unit": "ns",
            "range": "± 47574.318294743054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2760239.3846153845,
            "unit": "ns",
            "range": "± 23863.69370172488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15416.540816326531,
            "unit": "ns",
            "range": "± 3389.5781993414575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60482.563829787236,
            "unit": "ns",
            "range": "± 5044.914156922857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60630.33516483517,
            "unit": "ns",
            "range": "± 3815.3704939180957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63644.747191011236,
            "unit": "ns",
            "range": "± 9088.030383773155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3275.627659574468,
            "unit": "ns",
            "range": "± 727.6134835042978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11517.108695652174,
            "unit": "ns",
            "range": "± 921.2893909633262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3764562.503645833,
            "unit": "ns",
            "range": "± 59865.75060141704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217016.586751302,
            "unit": "ns",
            "range": "± 2854.2599698995095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780861.2056477865,
            "unit": "ns",
            "range": "± 3220.819018706418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931620.166080729,
            "unit": "ns",
            "range": "± 20767.027466359883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630023.8450520834,
            "unit": "ns",
            "range": "± 13073.407586840875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568338.7602914664,
            "unit": "ns",
            "range": "± 2468.6249771796993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41557.93298969072,
            "unit": "ns",
            "range": "± 6036.840514201145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2616865.933333333,
            "unit": "ns",
            "range": "± 41167.437418888425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563995.470588235,
            "unit": "ns",
            "range": "± 51485.261687348015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3145052.214285714,
            "unit": "ns",
            "range": "± 33712.093954495074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3251660.4285714286,
            "unit": "ns",
            "range": "± 129370.27491065454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9953814.80952381,
            "unit": "ns",
            "range": "± 760991.6705049584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5485690.666666667,
            "unit": "ns",
            "range": "± 29817.429096962416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14078781.857142856,
            "unit": "ns",
            "range": "± 77255.40110354958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36311777.1,
            "unit": "ns",
            "range": "± 103292.90101716989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73446935.66666667,
            "unit": "ns",
            "range": "± 513146.5913576448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150334573.92857143,
            "unit": "ns",
            "range": "± 1254435.208434731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037920.7692307692,
            "unit": "ns",
            "range": "± 76744.47080120668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1970636.5327868853,
            "unit": "ns",
            "range": "± 86656.53899138584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1716918.3510638298,
            "unit": "ns",
            "range": "± 157151.44038518664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9025436.736842105,
            "unit": "ns",
            "range": "± 1419335.2261522145"
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
          "id": "c445f1699a916d380b0112db2f87deb56966e171",
          "message": "test: Replace <T> with IActionLoader param",
          "timestamp": "2023-12-12T09:45:09+09:00",
          "tree_id": "daaadc2affc0f5d452ecfc7e371dc42205bab30c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c445f1699a916d380b0112db2f87deb56966e171"
        },
        "date": 1702342601979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213311.0357142857,
            "unit": "ns",
            "range": "± 6051.025713369795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221834.06382978722,
            "unit": "ns",
            "range": "± 15041.439993270282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168828.4,
            "unit": "ns",
            "range": "± 5518.532398681203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3208749.4,
            "unit": "ns",
            "range": "± 47076.47645177245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877292.9285714286,
            "unit": "ns",
            "range": "± 30038.314713722863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19013.73469387755,
            "unit": "ns",
            "range": "± 4006.7594171381393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83128.66,
            "unit": "ns",
            "range": "± 14179.715381038955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99216.7627118644,
            "unit": "ns",
            "range": "± 4390.764517276215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94410.11340206186,
            "unit": "ns",
            "range": "± 13309.309764750737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7297.520833333333,
            "unit": "ns",
            "range": "± 852.797291631508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20958.627659574468,
            "unit": "ns",
            "range": "± 1330.73133732168"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41682.17894736842,
            "unit": "ns",
            "range": "± 4762.173560552856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027554.3232323233,
            "unit": "ns",
            "range": "± 111059.3323122805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933953.1791044776,
            "unit": "ns",
            "range": "± 91417.7183633201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649380.948979592,
            "unit": "ns",
            "range": "± 170362.78916380956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12662506.372340426,
            "unit": "ns",
            "range": "± 977152.7488499954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2520526.7413793104,
            "unit": "ns",
            "range": "± 73508.02951702195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2611856.173076923,
            "unit": "ns",
            "range": "± 106143.58893253638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3195141.086956522,
            "unit": "ns",
            "range": "± 77031.93141507974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3420898.3846153845,
            "unit": "ns",
            "range": "± 93420.64530630343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13871807.322222222,
            "unit": "ns",
            "range": "± 948538.3785793073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5745926.5625,
            "unit": "ns",
            "range": "± 55351.55370775513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14470094.533333333,
            "unit": "ns",
            "range": "± 89862.43008213537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37217376.23076923,
            "unit": "ns",
            "range": "± 199249.61847439583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75360240.66666667,
            "unit": "ns",
            "range": "± 569866.09524214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149396146.7857143,
            "unit": "ns",
            "range": "± 667305.5256187066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3720773.1259014425,
            "unit": "ns",
            "range": "± 21566.096196052567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199645.4831194195,
            "unit": "ns",
            "range": "± 2246.285112076507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757330.4392277644,
            "unit": "ns",
            "range": "± 2712.8337892773716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919949.40234375,
            "unit": "ns",
            "range": "± 4433.963713352705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622312.7568359375,
            "unit": "ns",
            "range": "± 671.4955964608004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555308.3081380208,
            "unit": "ns",
            "range": "± 788.2814211649123"
          }
        ]
      }
    ]
  }
}