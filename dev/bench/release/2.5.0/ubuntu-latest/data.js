window.BENCHMARK_DATA = {
  "lastUpdate": 1689146542887,
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
          "id": "c5b47f3d0cdd1dd4c8c188e8ca8f2e75fcd9376b",
          "message": "Release 2.5.0",
          "timestamp": "2023-07-12T16:08:03+09:00",
          "tree_id": "de4825b452f7edcc131ba1b3671a91c396a9b554",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c5b47f3d0cdd1dd4c8c188e8ca8f2e75fcd9376b"
        },
        "date": 1689146424702,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273812.80555555556,
            "unit": "ns",
            "range": "± 8095.929855072484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265709.36363636365,
            "unit": "ns",
            "range": "± 8353.525486352237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223947.61538461538,
            "unit": "ns",
            "range": "± 1253.8858625928663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4151687.1333333333,
            "unit": "ns",
            "range": "± 41913.30982408242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830524.8571428573,
            "unit": "ns",
            "range": "± 23960.156352569164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15293.691489361701,
            "unit": "ns",
            "range": "± 1032.1168666281947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79542.76056338029,
            "unit": "ns",
            "range": "± 3754.8312020831004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69865.17647058824,
            "unit": "ns",
            "range": "± 1186.6336963915041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76954.5945945946,
            "unit": "ns",
            "range": "± 2662.5363277162505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4288.690721649485,
            "unit": "ns",
            "range": "± 446.94794534768306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15103.253968253968,
            "unit": "ns",
            "range": "± 703.8802356031237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313799.252631579,
            "unit": "ns",
            "range": "± 86370.24488742765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2523551.8484848486,
            "unit": "ns",
            "range": "± 75799.15785610731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1709114.9468085107,
            "unit": "ns",
            "range": "± 111301.97765551787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4631747.0869565215,
            "unit": "ns",
            "range": "± 116522.29306637697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998285.503125,
            "unit": "ns",
            "range": "± 33907.22277407407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890708.58984375,
            "unit": "ns",
            "range": "± 5108.392824157305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353435.051060268,
            "unit": "ns",
            "range": "± 1268.7830977305985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620380.1604352677,
            "unit": "ns",
            "range": "± 2644.687046480757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819516.9745442708,
            "unit": "ns",
            "range": "± 966.6761665647361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733959.80859375,
            "unit": "ns",
            "range": "± 356.4515416251349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3218254.85,
            "unit": "ns",
            "range": "± 70558.73496395155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3390537.9411764704,
            "unit": "ns",
            "range": "± 109032.58342986456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4101710.7333333334,
            "unit": "ns",
            "range": "± 34740.11181096134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3690484.8666666667,
            "unit": "ns",
            "range": "± 108499.37884097845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6359173.588235294,
            "unit": "ns",
            "range": "± 201492.62567829722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7504503.428571428,
            "unit": "ns",
            "range": "± 25395.575676799373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19117104.133333333,
            "unit": "ns",
            "range": "± 170339.6112681397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48224164.21428572,
            "unit": "ns",
            "range": "± 229091.25077648682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95246618.86666666,
            "unit": "ns",
            "range": "± 666133.5554221913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194072111.2,
            "unit": "ns",
            "range": "± 1188074.7540350552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46755.21951219512,
            "unit": "ns",
            "range": "± 2475.225875835314"
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
          "id": "b04d99b0618448958c21b00fef1e3daa69cf8c47",
          "message": "Release 2.5.0",
          "timestamp": "2023-07-12T16:09:09+09:00",
          "tree_id": "17a066ea486c168def576e22f7703b92c172deac",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b04d99b0618448958c21b00fef1e3daa69cf8c47"
        },
        "date": 1689146529640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284790,
            "unit": "ns",
            "range": "± 9121.180173091638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280968.9696969697,
            "unit": "ns",
            "range": "± 8914.261132045833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234199.6,
            "unit": "ns",
            "range": "± 3483.6045125702776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4297376.714285715,
            "unit": "ns",
            "range": "± 38317.7454399968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3872136.5384615385,
            "unit": "ns",
            "range": "± 37448.24918385234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17986.23404255319,
            "unit": "ns",
            "range": "± 1398.116985779594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87890.11428571428,
            "unit": "ns",
            "range": "± 3947.720617483715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72200,
            "unit": "ns",
            "range": "± 1055.2068699840513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89224.84536082474,
            "unit": "ns",
            "range": "± 11119.355371697033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4315.306122448979,
            "unit": "ns",
            "range": "± 444.05628899631705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18013.989247311827,
            "unit": "ns",
            "range": "± 1314.1843270771785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423028.7765957448,
            "unit": "ns",
            "range": "± 100682.76170305347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662049.6296296297,
            "unit": "ns",
            "range": "± 73454.69015823405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1806974.5662650603,
            "unit": "ns",
            "range": "± 93780.65261584334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4919769.384615385,
            "unit": "ns",
            "range": "± 157287.33488187444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6424329.316964285,
            "unit": "ns",
            "range": "± 15194.773397718709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923084.3936941964,
            "unit": "ns",
            "range": "± 5758.403111912351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374252.9956430288,
            "unit": "ns",
            "range": "± 532.6455132373521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610797.083854167,
            "unit": "ns",
            "range": "± 2635.8701731028705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825890.2491629465,
            "unit": "ns",
            "range": "± 592.9259419088307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747591.1742466518,
            "unit": "ns",
            "range": "± 426.33981292581046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3379202.918918919,
            "unit": "ns",
            "range": "± 113245.46311794924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3603452.9523809524,
            "unit": "ns",
            "range": "± 85436.66338316133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353553.6,
            "unit": "ns",
            "range": "± 68041.7748800586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3906431.785714286,
            "unit": "ns",
            "range": "± 50725.44453485097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6502955.294117647,
            "unit": "ns",
            "range": "± 208567.99792343422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7694664.357142857,
            "unit": "ns",
            "range": "± 56411.35745248353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19706158.466666665,
            "unit": "ns",
            "range": "± 61825.27502320744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50771746.93333333,
            "unit": "ns",
            "range": "± 147206.96708156302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101059006.86666666,
            "unit": "ns",
            "range": "± 373119.87791399215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200026064.14285713,
            "unit": "ns",
            "range": "± 498163.0230346838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47279.591397849465,
            "unit": "ns",
            "range": "± 2698.1283095338163"
          }
        ]
      }
    ]
  }
}