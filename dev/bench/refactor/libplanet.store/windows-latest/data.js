window.BENCHMARK_DATA = {
  "lastUpdate": 1689321582204,
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
          "id": "ff3b7c45a49ead28d4346d14c203a589539e6322",
          "message": "refactor: Introduce",
          "timestamp": "2023-07-14T16:38:45+09:00",
          "tree_id": "33a334eb5d869904e6f0a1b0c40899076b872c82",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ff3b7c45a49ead28d4346d14c203a589539e6322"
        },
        "date": 1689321402169,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436743.8775510204,
            "unit": "ns",
            "range": "± 109358.2543623513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2566139.705882353,
            "unit": "ns",
            "range": "± 121124.44832486032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790419.587628866,
            "unit": "ns",
            "range": "± 113504.77196207001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4670733.333333333,
            "unit": "ns",
            "range": "± 163100.69594438848"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48291.397849462366,
            "unit": "ns",
            "range": "± 2945.433308123615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7110192.307692308,
            "unit": "ns",
            "range": "± 75065.88729840895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20359064.285714287,
            "unit": "ns",
            "range": "± 182778.75910570074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50752892.85714286,
            "unit": "ns",
            "range": "± 609060.0418353182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102415833.33333333,
            "unit": "ns",
            "range": "± 2092970.3086621119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204800393.33333334,
            "unit": "ns",
            "range": "± 2142603.7656041193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4906749.399038462,
            "unit": "ns",
            "range": "± 23143.620549843443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574027.265625,
            "unit": "ns",
            "range": "± 7681.87326788596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1206721.568080357,
            "unit": "ns",
            "range": "± 5858.607049892382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672268.777901786,
            "unit": "ns",
            "range": "± 9599.482866522376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856659.5182291666,
            "unit": "ns",
            "range": "± 6914.07982478687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794969.8381696428,
            "unit": "ns",
            "range": "± 5537.957885943364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307304.6511627906,
            "unit": "ns",
            "range": "± 119759.43337630447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473843.137254902,
            "unit": "ns",
            "range": "± 121151.26785123129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4294800,
            "unit": "ns",
            "range": "± 61726.86735811363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3885975.6097560977,
            "unit": "ns",
            "range": "± 136742.6593651151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6384030.555555556,
            "unit": "ns",
            "range": "± 213038.37322945826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270753.488372093,
            "unit": "ns",
            "range": "± 8888.793073496143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262084.0909090909,
            "unit": "ns",
            "range": "± 9770.742829150904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234722.41379310345,
            "unit": "ns",
            "range": "± 12806.636085513803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4208866.666666667,
            "unit": "ns",
            "range": "± 70102.56431693154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892781.25,
            "unit": "ns",
            "range": "± 74254.97710591527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21077.083333333332,
            "unit": "ns",
            "range": "± 2051.5195480765847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92173.62637362638,
            "unit": "ns",
            "range": "± 5590.226295654768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80615.38461538461,
            "unit": "ns",
            "range": "± 5601.268171423782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104539.79591836735,
            "unit": "ns",
            "range": "± 17000.41078822011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5802.040816326531,
            "unit": "ns",
            "range": "± 1040.3191017031256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19169.473684210527,
            "unit": "ns",
            "range": "± 1997.768632068998"
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
          "id": "bec41914bb80694e2ad5b423371ba9ffd4b34f12",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T16:42:33+09:00",
          "tree_id": "b0f30e1643a3b6eea8b4b084576d861d1ce465bf",
          "url": "https://github.com/OnedgeLee/libplanet/commit/bec41914bb80694e2ad5b423371ba9ffd4b34f12"
        },
        "date": 1689321548829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398229.5918367347,
            "unit": "ns",
            "range": "± 117735.37268499636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547733.3333333335,
            "unit": "ns",
            "range": "± 95371.95604578947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797997.93814433,
            "unit": "ns",
            "range": "± 146369.37932517787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4997109.770114942,
            "unit": "ns",
            "range": "± 273444.778856111"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46753.76344086022,
            "unit": "ns",
            "range": "± 2873.58884610777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7137466.666666667,
            "unit": "ns",
            "range": "± 50078.29022156359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19940786.666666668,
            "unit": "ns",
            "range": "± 183944.2495768241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49547840,
            "unit": "ns",
            "range": "± 884526.7813114212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98093946.66666667,
            "unit": "ns",
            "range": "± 1522112.1015909188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195347826.66666666,
            "unit": "ns",
            "range": "± 2699814.3196647186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4810953.541666667,
            "unit": "ns",
            "range": "± 13548.957690078496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1560742.7604166667,
            "unit": "ns",
            "range": "± 7020.877503354645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1202389.3359375,
            "unit": "ns",
            "range": "± 7600.281871430169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646971.9270833335,
            "unit": "ns",
            "range": "± 8037.021840711193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834223.0598958334,
            "unit": "ns",
            "range": "± 3567.9664035692235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779051.0872395834,
            "unit": "ns",
            "range": "± 3190.424477767466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3169007.1428571427,
            "unit": "ns",
            "range": "± 74854.95689283758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3276296.875,
            "unit": "ns",
            "range": "± 92794.73874259494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4013250,
            "unit": "ns",
            "range": "± 102168.89682413562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3708160,
            "unit": "ns",
            "range": "± 101493.61658201244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6197097.297297297,
            "unit": "ns",
            "range": "± 208878.8650636303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262184.6153846154,
            "unit": "ns",
            "range": "± 4912.021360514818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249921.73913043478,
            "unit": "ns",
            "range": "± 6281.065089308219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223407.14285714287,
            "unit": "ns",
            "range": "± 7352.682012239428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4043246.6666666665,
            "unit": "ns",
            "range": "± 68303.92026677183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3773612.5,
            "unit": "ns",
            "range": "± 71434.54696433652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18891.397849462366,
            "unit": "ns",
            "range": "± 1426.8127991815772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85119.38775510204,
            "unit": "ns",
            "range": "± 6932.601275569948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71703.0303030303,
            "unit": "ns",
            "range": "± 2266.947954917146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87801.19047619047,
            "unit": "ns",
            "range": "± 8307.066146557501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5020.212765957447,
            "unit": "ns",
            "range": "± 788.0259516541569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18270,
            "unit": "ns",
            "range": "± 1383.8429378349788"
          }
        ]
      }
    ]
  }
}