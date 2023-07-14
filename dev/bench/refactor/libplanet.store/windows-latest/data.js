window.BENCHMARK_DATA = {
  "lastUpdate": 1689325086849,
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
          "id": "d1a40d16c45df73e718f3c2f49218e80b26485b4",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T16:40:21+09:00",
          "tree_id": "33a334eb5d869904e6f0a1b0c40899076b872c82",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d1a40d16c45df73e718f3c2f49218e80b26485b4"
        },
        "date": 1689321569846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1837618.3673469387,
            "unit": "ns",
            "range": "± 189615.9952075354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3361784.285714286,
            "unit": "ns",
            "range": "± 154790.39206010196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276410.3092783503,
            "unit": "ns",
            "range": "± 168650.0188287716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6254520.588235294,
            "unit": "ns",
            "range": "± 251386.51618105348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61676.666666666664,
            "unit": "ns",
            "range": "± 8855.824592520064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9081088.095238095,
            "unit": "ns",
            "range": "± 284523.7794531982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25529866.666666668,
            "unit": "ns",
            "range": "± 658002.0666458008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65969653.571428575,
            "unit": "ns",
            "range": "± 1815681.57664403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131986586.66666667,
            "unit": "ns",
            "range": "± 2068246.1303055324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263748171.42857143,
            "unit": "ns",
            "range": "± 2602641.337159254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6186244.322916667,
            "unit": "ns",
            "range": "± 56449.05522801191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984234.2354910714,
            "unit": "ns",
            "range": "± 19366.524136194545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1486190.15625,
            "unit": "ns",
            "range": "± 15541.8426280897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3301571.0416666665,
            "unit": "ns",
            "range": "± 46186.551960288045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1086922.4330357143,
            "unit": "ns",
            "range": "± 10258.057736707415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1010859.921875,
            "unit": "ns",
            "range": "± 16964.065618326877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4211306.451612903,
            "unit": "ns",
            "range": "± 191400.61742621672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4239563.636363637,
            "unit": "ns",
            "range": "± 157069.3715660178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5495641.463414635,
            "unit": "ns",
            "range": "± 196125.2864569097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5005023.333333333,
            "unit": "ns",
            "range": "± 223630.75223374975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8122413.829787234,
            "unit": "ns",
            "range": "± 311537.83525233256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346146.73913043475,
            "unit": "ns",
            "range": "± 25930.653297953595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331197.9381443299,
            "unit": "ns",
            "range": "± 28238.423068066917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303211.82795698923,
            "unit": "ns",
            "range": "± 19320.471512060474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5143009.302325581,
            "unit": "ns",
            "range": "± 188204.95390215208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4671613.043478261,
            "unit": "ns",
            "range": "± 178421.82428627534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22997.701149425287,
            "unit": "ns",
            "range": "± 3883.7460043016326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108822.91666666667,
            "unit": "ns",
            "range": "± 14359.398016752259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118209.47368421052,
            "unit": "ns",
            "range": "± 24575.117469835517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135873.68421052632,
            "unit": "ns",
            "range": "± 19872.88974760572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8195.698924731183,
            "unit": "ns",
            "range": "± 1861.7963496308694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24153.684210526317,
            "unit": "ns",
            "range": "± 6921.194868651975"
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
          "id": "96a4ac52b7e642589aee9c900d7d36fc0017a642",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T17:00:45+09:00",
          "tree_id": "b17ae73be2cd65028593973a4117e8aa6a6ccee3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/96a4ac52b7e642589aee9c900d7d36fc0017a642"
        },
        "date": 1689322609789,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285426.8041237113,
            "unit": "ns",
            "range": "± 87703.84768671774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2343935.3846153845,
            "unit": "ns",
            "range": "± 105881.29472251171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593359.3406593406,
            "unit": "ns",
            "range": "± 89330.82953956662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4462401.960784313,
            "unit": "ns",
            "range": "± 182249.37474811386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41888.57142857143,
            "unit": "ns",
            "range": "± 2029.174377485658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6703466.666666667,
            "unit": "ns",
            "range": "± 11954.895390990414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17179833.333333332,
            "unit": "ns",
            "range": "± 114338.79273374162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43793780,
            "unit": "ns",
            "range": "± 305486.60527100036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88015573.33333333,
            "unit": "ns",
            "range": "± 649743.5719097921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176116213.33333334,
            "unit": "ns",
            "range": "± 1358418.3412371622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4804251.536458333,
            "unit": "ns",
            "range": "± 12455.200260862084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532325.1041666667,
            "unit": "ns",
            "range": "± 3448.3368403947147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1131195.2799479167,
            "unit": "ns",
            "range": "± 2246.100910638172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577719.5572916665,
            "unit": "ns",
            "range": "± 6840.749593700988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841904.8567708334,
            "unit": "ns",
            "range": "± 3853.9785484288977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750695.6510416666,
            "unit": "ns",
            "range": "± 842.748783718591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2966526.3157894737,
            "unit": "ns",
            "range": "± 64805.59682710251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3137480,
            "unit": "ns",
            "range": "± 54497.15851046076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3815414.285714286,
            "unit": "ns",
            "range": "± 57520.349003205374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3408903.3333333335,
            "unit": "ns",
            "range": "± 101008.32838087584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5764097.5,
            "unit": "ns",
            "range": "± 186822.6376601821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247821.21212121213,
            "unit": "ns",
            "range": "± 7526.318720652779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236492.85714285713,
            "unit": "ns",
            "range": "± 7523.731328340034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205571.42857142858,
            "unit": "ns",
            "range": "± 3485.227852926288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3761878.5714285714,
            "unit": "ns",
            "range": "± 32733.919800331052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3530500,
            "unit": "ns",
            "range": "± 43747.81627203155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15604.255319148937,
            "unit": "ns",
            "range": "± 1070.0130532433643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75847.05882352941,
            "unit": "ns",
            "range": "± 3613.014228782343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66727.77777777778,
            "unit": "ns",
            "range": "± 2209.7978073132276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79979.59183673469,
            "unit": "ns",
            "range": "± 12449.551469448535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4140.625,
            "unit": "ns",
            "range": "± 549.5602308832227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14760.416666666666,
            "unit": "ns",
            "range": "± 1281.4037669817767"
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
          "id": "6004a41ceb9f088bbbe389539e24532a1e0011ce",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T16:57:57+09:00",
          "tree_id": "9a514237711eb8abbcfc90aab8e7df35c35f516b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6004a41ceb9f088bbbe389539e24532a1e0011ce"
        },
        "date": 1689322772288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1680078.021978022,
            "unit": "ns",
            "range": "± 116424.03417603143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3169858.536585366,
            "unit": "ns",
            "range": "± 167463.69936568162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196114.285714286,
            "unit": "ns",
            "range": "± 158365.13755764172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6145747.191011236,
            "unit": "ns",
            "range": "± 463499.05685151846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57012.3595505618,
            "unit": "ns",
            "range": "± 3418.227219451597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9422252,
            "unit": "ns",
            "range": "± 376466.4964576556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24970379.310344826,
            "unit": "ns",
            "range": "± 1053893.1734136706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66640929.6875,
            "unit": "ns",
            "range": "± 3082361.544345027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133839501.2195122,
            "unit": "ns",
            "range": "± 4742370.534928811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265593863.63636363,
            "unit": "ns",
            "range": "± 6466464.5475196885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6157766.964285715,
            "unit": "ns",
            "range": "± 91523.5168269803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022850.502232143,
            "unit": "ns",
            "range": "± 56139.43582929548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1544430.0666360294,
            "unit": "ns",
            "range": "± 31116.5416400892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3448480.9765625,
            "unit": "ns",
            "range": "± 68783.58473546407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062532.8297334558,
            "unit": "ns",
            "range": "± 34243.57226030972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1014898.0837264151,
            "unit": "ns",
            "range": "± 41968.911227260534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3979351.515151515,
            "unit": "ns",
            "range": "± 124291.1881460531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4379380.21978022,
            "unit": "ns",
            "range": "± 371302.97638325265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5361201.136363637,
            "unit": "ns",
            "range": "± 330330.0288041163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4666481.927710843,
            "unit": "ns",
            "range": "± 248056.61093868266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8102269.662921349,
            "unit": "ns",
            "range": "± 547213.493820468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322226.4705882353,
            "unit": "ns",
            "range": "± 10347.48714404026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310975,
            "unit": "ns",
            "range": "± 9530.893377403221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281631.25,
            "unit": "ns",
            "range": "± 16763.4396200403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5118187.5,
            "unit": "ns",
            "range": "± 132290.17286615254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4667744.827586207,
            "unit": "ns",
            "range": "± 134237.7277875946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23172.043010752688,
            "unit": "ns",
            "range": "± 1927.5105363383063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101698.93617021276,
            "unit": "ns",
            "range": "± 7508.196162114118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90605.26315789473,
            "unit": "ns",
            "range": "± 6904.043964830254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112625.53191489361,
            "unit": "ns",
            "range": "± 15194.402875607924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6573.469387755102,
            "unit": "ns",
            "range": "± 1255.6307012080088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21718.68131868132,
            "unit": "ns",
            "range": "± 1866.542382047743"
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
          "id": "b7fa95f54808588a2aaeb628df61d0d9548023d7",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T17:13:41+09:00",
          "tree_id": "2cdd327e4937b0398dab7adaf7fce6b43e92404c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b7fa95f54808588a2aaeb628df61d0d9548023d7"
        },
        "date": 1689323372626,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393010,
            "unit": "ns",
            "range": "± 110782.03096097482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2510674.4444444445,
            "unit": "ns",
            "range": "± 136992.34257375554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1773243,
            "unit": "ns",
            "range": "± 121507.86170267155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4630304.838709678,
            "unit": "ns",
            "range": "± 210248.4084479395"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48586.458333333336,
            "unit": "ns",
            "range": "± 5256.747439277531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7384806.666666667,
            "unit": "ns",
            "range": "± 80109.28666218299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18137161.53846154,
            "unit": "ns",
            "range": "± 61426.04684308791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46114646.15384615,
            "unit": "ns",
            "range": "± 345374.0499212041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92276583.33333333,
            "unit": "ns",
            "range": "± 524681.1503416237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182685576.66666666,
            "unit": "ns",
            "range": "± 1204010.8675747472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886278.359375,
            "unit": "ns",
            "range": "± 18351.78306935805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1565925.376674107,
            "unit": "ns",
            "range": "± 8907.720256812905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158776.1643629808,
            "unit": "ns",
            "range": "± 1149.73020461422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590993.191964286,
            "unit": "ns",
            "range": "± 11220.38591974634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816274.2220052084,
            "unit": "ns",
            "range": "± 4979.8489481979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740267.802734375,
            "unit": "ns",
            "range": "± 2316.793969209021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3085684.6153846155,
            "unit": "ns",
            "range": "± 41881.17807468024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182793.3333333335,
            "unit": "ns",
            "range": "± 71884.31766690689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4055530.434782609,
            "unit": "ns",
            "range": "± 95205.08692856226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3507927.9411764704,
            "unit": "ns",
            "range": "± 159790.83608639924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6210951.428571428,
            "unit": "ns",
            "range": "± 193167.90071216857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282168.5714285714,
            "unit": "ns",
            "range": "± 13753.96167283167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260572.0779220779,
            "unit": "ns",
            "range": "± 12724.74406088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242564.70588235295,
            "unit": "ns",
            "range": "± 13020.13738756379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4003528.5714285714,
            "unit": "ns",
            "range": "± 56902.675732293166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3570076.923076923,
            "unit": "ns",
            "range": "± 28804.431194006527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21372.63157894737,
            "unit": "ns",
            "range": "± 2032.001534242131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90550.52631578948,
            "unit": "ns",
            "range": "± 7272.988113768886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74645.83333333333,
            "unit": "ns",
            "range": "± 6720.2900417775145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105017.3469387755,
            "unit": "ns",
            "range": "± 16239.013894634896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5501.030927835051,
            "unit": "ns",
            "range": "± 997.6529587571212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21086.59793814433,
            "unit": "ns",
            "range": "± 2213.6710114827442"
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
          "id": "07a1f0fe0f1dd4fccc5acb3c5483136b1311fd7b",
          "message": "refactor: Introduce Libplanet.Store",
          "timestamp": "2023-07-14T17:17:17+09:00",
          "tree_id": "c46bbe3752b63ab9c50f5a635bbf4b725ef40268",
          "url": "https://github.com/OnedgeLee/libplanet/commit/07a1f0fe0f1dd4fccc5acb3c5483136b1311fd7b"
        },
        "date": 1689323884507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1628069.696969697,
            "unit": "ns",
            "range": "± 158740.56453048871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982272.1649484537,
            "unit": "ns",
            "range": "± 191219.93486028732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091790.5263157894,
            "unit": "ns",
            "range": "± 192257.19313864392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5732122.7272727275,
            "unit": "ns",
            "range": "± 364799.71603612456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51851.11111111111,
            "unit": "ns",
            "range": "± 3593.728758825572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8565008.510638298,
            "unit": "ns",
            "range": "± 485702.53688383417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23623976.470588237,
            "unit": "ns",
            "range": "± 955572.046805103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59517658.333333336,
            "unit": "ns",
            "range": "± 2541908.532025418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118012533.33333333,
            "unit": "ns",
            "range": "± 5614414.103649186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236855740,
            "unit": "ns",
            "range": "± 10471958.009882668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5776321.149553572,
            "unit": "ns",
            "range": "± 132415.8734671013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834349.8291015625,
            "unit": "ns",
            "range": "± 46940.75256137624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1416970.660665761,
            "unit": "ns",
            "range": "± 35346.348280153405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3165090.830592105,
            "unit": "ns",
            "range": "± 70066.00861890588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009135.704985119,
            "unit": "ns",
            "range": "± 22886.197103721785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911989.3391927084,
            "unit": "ns",
            "range": "± 18760.37160563888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3676267.6767676766,
            "unit": "ns",
            "range": "± 266514.72135634377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4371100,
            "unit": "ns",
            "range": "± 73229.19762373055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5035151.020408163,
            "unit": "ns",
            "range": "± 199347.96224446446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4234321.428571428,
            "unit": "ns",
            "range": "± 285643.4043225743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7540890,
            "unit": "ns",
            "range": "± 392884.97450255515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300087.0967741936,
            "unit": "ns",
            "range": "± 23341.804379633006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278852.80898876407,
            "unit": "ns",
            "range": "± 19622.274506097547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268052.0833333333,
            "unit": "ns",
            "range": "± 21054.910561955134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4782794.623655914,
            "unit": "ns",
            "range": "± 276089.70516277436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4327869.3877551025,
            "unit": "ns",
            "range": "± 258942.75704171296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23434.375,
            "unit": "ns",
            "range": "± 2186.649834792942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101693.75,
            "unit": "ns",
            "range": "± 8368.170428223213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83656.84210526316,
            "unit": "ns",
            "range": "± 8849.902663626033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112513.68421052632,
            "unit": "ns",
            "range": "± 15630.8656089946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5950,
            "unit": "ns",
            "range": "± 881.8034472532009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21162.36559139785,
            "unit": "ns",
            "range": "± 1979.1804396558243"
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
          "id": "a56d8ee1bb8ff0d73437b4b179f075c4d445fc17",
          "message": "document: Update changelog",
          "timestamp": "2023-07-14T17:26:03+09:00",
          "tree_id": "fd96d33c1568a1be5f60d113fe0c91a6b9db71e6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/a56d8ee1bb8ff0d73437b4b179f075c4d445fc17"
        },
        "date": 1689324306252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642502.0833333333,
            "unit": "ns",
            "range": "± 117873.36825162185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054706.4102564105,
            "unit": "ns",
            "range": "± 106072.78234870471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155166.6666666665,
            "unit": "ns",
            "range": "± 125895.35106702652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6098679.746835443,
            "unit": "ns",
            "range": "± 316766.0183065432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59221.875,
            "unit": "ns",
            "range": "± 5804.575384533898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9133018.518518519,
            "unit": "ns",
            "range": "± 247328.5996045265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24425915.384615384,
            "unit": "ns",
            "range": "± 258584.1121896763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63257235.71428572,
            "unit": "ns",
            "range": "± 754634.0749581297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126074958.33333333,
            "unit": "ns",
            "range": "± 2941363.905744152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242863570,
            "unit": "ns",
            "range": "± 5500518.741383924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5966512.552083333,
            "unit": "ns",
            "range": "± 92893.9934126157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952631.4192708333,
            "unit": "ns",
            "range": "± 23242.971771481876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1487810.3450520833,
            "unit": "ns",
            "range": "± 22818.831371211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3279038.671875,
            "unit": "ns",
            "range": "± 34137.46364228598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045539.8307291666,
            "unit": "ns",
            "range": "± 18232.740061746867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 979219.7721354166,
            "unit": "ns",
            "range": "± 13422.378516427689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3845488.5714285714,
            "unit": "ns",
            "range": "± 113628.03809807159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4061584.375,
            "unit": "ns",
            "range": "± 124362.4258921895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5029334.042553191,
            "unit": "ns",
            "range": "± 191929.8618229833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4476738.461538462,
            "unit": "ns",
            "range": "± 65782.7933234512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7605668.888888889,
            "unit": "ns",
            "range": "± 288341.1204413511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329703.8461538461,
            "unit": "ns",
            "range": "± 6790.374409072347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304296.07843137253,
            "unit": "ns",
            "range": "± 12357.005475183923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282678.82352941175,
            "unit": "ns",
            "range": "± 15185.739661788959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5004900,
            "unit": "ns",
            "range": "± 58260.33527767126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4578420,
            "unit": "ns",
            "range": "± 81710.70221912707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24071.11111111111,
            "unit": "ns",
            "range": "± 1818.7688417924794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111276.92307692308,
            "unit": "ns",
            "range": "± 6222.433909707981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99558.24175824175,
            "unit": "ns",
            "range": "± 8319.455990949647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121694.79166666667,
            "unit": "ns",
            "range": "± 19293.21871480218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7168.421052631579,
            "unit": "ns",
            "range": "± 1103.6942952758304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22200.526315789473,
            "unit": "ns",
            "range": "± 2503.6940233578825"
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
          "id": "c1c142d888a793a83047be3b91bd99f778649bb7",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:39:35+09:00",
          "tree_id": "fd96d33c1568a1be5f60d113fe0c91a6b9db71e6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c1c142d888a793a83047be3b91bd99f778649bb7"
        },
        "date": 1689324889654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439676.1904761905,
            "unit": "ns",
            "range": "± 29596.43398725436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2459532.8571428573,
            "unit": "ns",
            "range": "± 64895.4883128353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1802090.7216494845,
            "unit": "ns",
            "range": "± 141801.6492341167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4671595.081967213,
            "unit": "ns",
            "range": "± 209094.4327540625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43463.85542168675,
            "unit": "ns",
            "range": "± 2334.8671196980517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6876614.285714285,
            "unit": "ns",
            "range": "± 29634.098269051152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17558973.333333332,
            "unit": "ns",
            "range": "± 99138.0672645598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45363266.666666664,
            "unit": "ns",
            "range": "± 298684.62265326583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90937613.33333333,
            "unit": "ns",
            "range": "± 775567.9502943695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182390900,
            "unit": "ns",
            "range": "± 982688.4072351143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4857697.935267857,
            "unit": "ns",
            "range": "± 9154.446849933773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542806.5559895833,
            "unit": "ns",
            "range": "± 3142.74447304373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155075.09765625,
            "unit": "ns",
            "range": "± 1875.1067503558802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549524.8604910714,
            "unit": "ns",
            "range": "± 4342.593788534332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823999.21875,
            "unit": "ns",
            "range": "± 1439.3633632545648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736055.4166666666,
            "unit": "ns",
            "range": "± 949.2964009573217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2940200,
            "unit": "ns",
            "range": "± 60312.73128913625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3148016,
            "unit": "ns",
            "range": "± 82279.74983757142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4000295,
            "unit": "ns",
            "range": "± 88796.91480534314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3533927.5862068967,
            "unit": "ns",
            "range": "± 91660.56129839564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6045638.888888889,
            "unit": "ns",
            "range": "± 201663.93441675298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260421.73913043478,
            "unit": "ns",
            "range": "± 9978.174249463527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248240.4255319149,
            "unit": "ns",
            "range": "± 9685.930171813496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228582.0224719101,
            "unit": "ns",
            "range": "± 12663.75071717546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3923193.3333333335,
            "unit": "ns",
            "range": "± 27248.183862590253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3551714.285714286,
            "unit": "ns",
            "range": "± 40689.0007277124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17840,
            "unit": "ns",
            "range": "± 1558.6682804595205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85035.05154639175,
            "unit": "ns",
            "range": "± 4795.919299195788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69175,
            "unit": "ns",
            "range": "± 2690.6061960323477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84344.28571428571,
            "unit": "ns",
            "range": "± 2838.995316998231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4355.670103092783,
            "unit": "ns",
            "range": "± 864.8180290487112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16865.656565656565,
            "unit": "ns",
            "range": "± 1604.5955441921014"
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
          "id": "00cdaec85ad04e3ea7fc8a6a2324f3da56d761d7",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:41:21+09:00",
          "tree_id": "7b8c075edf91e440c17939764416819d36db4710",
          "url": "https://github.com/OnedgeLee/libplanet/commit/00cdaec85ad04e3ea7fc8a6a2324f3da56d761d7"
        },
        "date": 1689325053532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1291312.3655913977,
            "unit": "ns",
            "range": "± 72909.31072226184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2504656.25,
            "unit": "ns",
            "range": "± 98311.38958334639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1772932.8282828282,
            "unit": "ns",
            "range": "± 111193.8379591354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4748446.511627907,
            "unit": "ns",
            "range": "± 174808.64551579062"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44222.388059701494,
            "unit": "ns",
            "range": "± 2097.532525519651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7137571.428571428,
            "unit": "ns",
            "range": "± 86570.98624447257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19773853.333333332,
            "unit": "ns",
            "range": "± 261415.12653431587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49806820,
            "unit": "ns",
            "range": "± 734792.5423449222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99008925,
            "unit": "ns",
            "range": "± 2262568.8671984747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200547342.10526314,
            "unit": "ns",
            "range": "± 4238861.432339243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4851639.53125,
            "unit": "ns",
            "range": "± 19766.371074816816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1592931.8638392857,
            "unit": "ns",
            "range": "± 6663.277379427287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224356.484375,
            "unit": "ns",
            "range": "± 5042.764459944674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2707481.6145833335,
            "unit": "ns",
            "range": "± 12691.871046651007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847199.1927083334,
            "unit": "ns",
            "range": "± 2824.4581400861384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772679.8046875,
            "unit": "ns",
            "range": "± 2474.424208563073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3166586.7924528304,
            "unit": "ns",
            "range": "± 118601.47560006911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3385313.1578947366,
            "unit": "ns",
            "range": "± 116448.33019830896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4051165.1515151514,
            "unit": "ns",
            "range": "± 111901.59215023518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3797584.9056603773,
            "unit": "ns",
            "range": "± 151414.19935983347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6275688.372093023,
            "unit": "ns",
            "range": "± 231517.27510295284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261920.45454545456,
            "unit": "ns",
            "range": "± 9192.65580334737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247328.88888888888,
            "unit": "ns",
            "range": "± 9400.184287899076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217116.32653061225,
            "unit": "ns",
            "range": "± 8532.95930834216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4050615.3846153845,
            "unit": "ns",
            "range": "± 59049.4545014861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3733388.888888889,
            "unit": "ns",
            "range": "± 104026.89864177267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18517.021276595744,
            "unit": "ns",
            "range": "± 1674.453099474016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83188.29787234042,
            "unit": "ns",
            "range": "± 5387.417766415362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71365.38461538461,
            "unit": "ns",
            "range": "± 2421.99770323878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87343.01075268818,
            "unit": "ns",
            "range": "± 10560.646779532826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4950,
            "unit": "ns",
            "range": "± 728.1171878037612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17667.01030927835,
            "unit": "ns",
            "range": "± 1921.8438222123943"
          }
        ]
      }
    ]
  }
}