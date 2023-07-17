window.BENCHMARK_DATA = {
  "lastUpdate": 1689577069423,
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
          "id": "91f1c570470d5b675fb99cb136578e5011230f97",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:45:57+09:00",
          "tree_id": "57576fbd3c68142de48cab4199837291db56c680",
          "url": "https://github.com/OnedgeLee/libplanet/commit/91f1c570470d5b675fb99cb136578e5011230f97"
        },
        "date": 1689325197639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1069370.707070707,
            "unit": "ns",
            "range": "± 106726.3611952771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888794.7368421052,
            "unit": "ns",
            "range": "± 95366.51249397326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1379702.06185567,
            "unit": "ns",
            "range": "± 108911.27981391306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3512435.714285714,
            "unit": "ns",
            "range": "± 169195.83802373763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35364.38356164384,
            "unit": "ns",
            "range": "± 1690.937434204085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4974428.571428572,
            "unit": "ns",
            "range": "± 16491.976070964774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12998746.666666666,
            "unit": "ns",
            "range": "± 80779.11564141764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32893442.85714286,
            "unit": "ns",
            "range": "± 228278.25030089827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66947813.333333336,
            "unit": "ns",
            "range": "± 579001.3420496002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134947820,
            "unit": "ns",
            "range": "± 1189406.702760426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3557263.3333333335,
            "unit": "ns",
            "range": "± 4957.761343237978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1113765.1041666667,
            "unit": "ns",
            "range": "± 1893.0262752075232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 836352.9557291666,
            "unit": "ns",
            "range": "± 1652.4965895015803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1872602.5130208333,
            "unit": "ns",
            "range": "± 2248.8842693932156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 591224.7330729166,
            "unit": "ns",
            "range": "± 1207.5596403692498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 534903.6551339285,
            "unit": "ns",
            "range": "± 1014.3839558870224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2136958.8235294116,
            "unit": "ns",
            "range": "± 61959.37758393184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279993.9393939395,
            "unit": "ns",
            "range": "± 72171.07254379148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2897071.4285714286,
            "unit": "ns",
            "range": "± 81560.8786810008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2561833.3333333335,
            "unit": "ns",
            "range": "± 96622.24710884983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4417904.081632653,
            "unit": "ns",
            "range": "± 165128.70354058134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196733.33333333334,
            "unit": "ns",
            "range": "± 5591.000874632542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186467.39130434784,
            "unit": "ns",
            "range": "± 7163.303221522753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167480.8510638298,
            "unit": "ns",
            "range": "± 6478.41359734043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2913238.4615384615,
            "unit": "ns",
            "range": "± 32835.132060582575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2700064.285714286,
            "unit": "ns",
            "range": "± 30577.58372359769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15953.125,
            "unit": "ns",
            "range": "± 2056.5660251471318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66770,
            "unit": "ns",
            "range": "± 3872.9673900633843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54831.57894736842,
            "unit": "ns",
            "range": "± 1186.0544448712421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69090.14084507042,
            "unit": "ns",
            "range": "± 2549.5184379787415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4311.224489795918,
            "unit": "ns",
            "range": "± 652.3364278224618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14242.307692307691,
            "unit": "ns",
            "range": "± 1244.296389239117"
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
          "id": "fee9e292264be5ee4d81ab25cd5584bcdabda1f6",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T17:49:42+09:00",
          "tree_id": "90aa36b0a64cd978722f7cd0ae29f622eb42dadb",
          "url": "https://github.com/OnedgeLee/libplanet/commit/fee9e292264be5ee4d81ab25cd5584bcdabda1f6"
        },
        "date": 1689325535305,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1456677.4193548388,
            "unit": "ns",
            "range": "± 101122.69251307526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2725442.2535211267,
            "unit": "ns",
            "range": "± 132270.57513399443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1864886.5979381443,
            "unit": "ns",
            "range": "± 123948.64748897859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4811333.333333333,
            "unit": "ns",
            "range": "± 122510.37814660107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52212.5,
            "unit": "ns",
            "range": "± 4581.478731634695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7840080,
            "unit": "ns",
            "range": "± 174957.03412402052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21013835.714285713,
            "unit": "ns",
            "range": "± 319434.68059187813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52812492.85714286,
            "unit": "ns",
            "range": "± 408051.23634602124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106552613.33333333,
            "unit": "ns",
            "range": "± 1147048.0341584072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210729413.33333334,
            "unit": "ns",
            "range": "± 1219829.7245732213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4912670.535714285,
            "unit": "ns",
            "range": "± 15747.034730385622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571887.6953125,
            "unit": "ns",
            "range": "± 6008.9594600485225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217454.1536458333,
            "unit": "ns",
            "range": "± 6030.20922530638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2716741.5625,
            "unit": "ns",
            "range": "± 10888.014870273193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866991.9642857143,
            "unit": "ns",
            "range": "± 2482.732744212568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783600.5789620535,
            "unit": "ns",
            "range": "± 1323.3484444681271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3455566.6666666665,
            "unit": "ns",
            "range": "± 36912.18665711263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3626497.0588235296,
            "unit": "ns",
            "range": "± 115190.93368494135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4386666.666666667,
            "unit": "ns",
            "range": "± 101493.71080679497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4042455.882352941,
            "unit": "ns",
            "range": "± 129849.13668439505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6384375,
            "unit": "ns",
            "range": "± 207718.5023397909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270933.3333333333,
            "unit": "ns",
            "range": "± 9854.048732514175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250558.49056603774,
            "unit": "ns",
            "range": "± 9559.136466516535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245575.75757575757,
            "unit": "ns",
            "range": "± 14677.492771692301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4188389.4736842103,
            "unit": "ns",
            "range": "± 91752.49251677547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3734262.5,
            "unit": "ns",
            "range": "± 93674.22415872538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20087.755102040817,
            "unit": "ns",
            "range": "± 2319.9833498390453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91411.11111111111,
            "unit": "ns",
            "range": "± 8123.748115661393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79925.80645161291,
            "unit": "ns",
            "range": "± 6519.317502719306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96875.51020408163,
            "unit": "ns",
            "range": "± 14024.257785638394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6009.278350515464,
            "unit": "ns",
            "range": "± 948.362895800223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17990.425531914894,
            "unit": "ns",
            "range": "± 1542.6077034207174"
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
          "id": "9058dcd3a7c286e831e220c4388218f81eded753",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-14T20:05:42+09:00",
          "tree_id": "e58e15e7738000db75b8fd2428d1202a9d50f77d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/9058dcd3a7c286e831e220c4388218f81eded753"
        },
        "date": 1689334024165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649991.6666666667,
            "unit": "ns",
            "range": "± 119053.92556729265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3033618.604651163,
            "unit": "ns",
            "range": "± 112420.97384345774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2108861.111111111,
            "unit": "ns",
            "range": "± 160098.80618019798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5792659.375,
            "unit": "ns",
            "range": "± 267760.46196195466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56776.84210526316,
            "unit": "ns",
            "range": "± 4019.009421502167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8870376.666666666,
            "unit": "ns",
            "range": "± 259176.5457185019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23960666.666666668,
            "unit": "ns",
            "range": "± 429166.83846506046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59826407.692307696,
            "unit": "ns",
            "range": "± 1386488.192498754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120809560,
            "unit": "ns",
            "range": "± 3615901.833768206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243406766.66666666,
            "unit": "ns",
            "range": "± 4010177.2129824646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5872055.833333333,
            "unit": "ns",
            "range": "± 97258.00067599938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941248.0859375,
            "unit": "ns",
            "range": "± 27920.683224247332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439833.8169642857,
            "unit": "ns",
            "range": "± 13660.563832905606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3156451.4453125,
            "unit": "ns",
            "range": "± 56310.37365646839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012325.1822916666,
            "unit": "ns",
            "range": "± 8821.03940562102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937650.6380208334,
            "unit": "ns",
            "range": "± 11865.213726504728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3977305.263157895,
            "unit": "ns",
            "range": "± 85344.61171355819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4096850,
            "unit": "ns",
            "range": "± 137212.02758075006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5087282.608695652,
            "unit": "ns",
            "range": "± 122698.50207344502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4578426.315789473,
            "unit": "ns",
            "range": "± 82029.10623069014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7513581.355932203,
            "unit": "ns",
            "range": "± 332467.90224879753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312896.9696969697,
            "unit": "ns",
            "range": "± 14653.137964765505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293666.0714285714,
            "unit": "ns",
            "range": "± 12656.701807712414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280994.7368421053,
            "unit": "ns",
            "range": "± 18100.060940423173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5014771.428571428,
            "unit": "ns",
            "range": "± 71152.94932609749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4425144.444444444,
            "unit": "ns",
            "range": "± 131850.7780884879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25322.58064516129,
            "unit": "ns",
            "range": "± 2055.751689045305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107079.56989247311,
            "unit": "ns",
            "range": "± 6950.251154983145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93295.78947368421,
            "unit": "ns",
            "range": "± 8933.52418831965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118275.25773195876,
            "unit": "ns",
            "range": "± 17518.103914996973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6119.354838709677,
            "unit": "ns",
            "range": "± 865.8067442409256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24327.956989247312,
            "unit": "ns",
            "range": "± 2502.7535093502015"
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
          "id": "454b685bc4335e157611f678debbfbb26b483e22",
          "message": "document: Update changelog / ci",
          "timestamp": "2023-07-17T12:06:42+09:00",
          "tree_id": "4bd5eb9901baca5b47c81f22eeefe0accca60c8d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/454b685bc4335e157611f678debbfbb26b483e22"
        },
        "date": 1689564130014,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1330655,
            "unit": "ns",
            "range": "± 112398.59301664417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2370789.090909091,
            "unit": "ns",
            "range": "± 99504.0919924016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775357,
            "unit": "ns",
            "range": "± 136036.82526909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4588985.9375,
            "unit": "ns",
            "range": "± 201689.87734763479"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43579.6875,
            "unit": "ns",
            "range": "± 2011.962611876101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6917169.230769231,
            "unit": "ns",
            "range": "± 22598.576084028857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17345440,
            "unit": "ns",
            "range": "± 83118.86325360465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44603066.666666664,
            "unit": "ns",
            "range": "± 488222.7736051102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89343846.66666667,
            "unit": "ns",
            "range": "± 799553.8754890277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178934080,
            "unit": "ns",
            "range": "± 1654937.8469986634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4899362.5,
            "unit": "ns",
            "range": "± 9457.461942947812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523043.4635416667,
            "unit": "ns",
            "range": "± 2444.8324963400496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130153.9453125,
            "unit": "ns",
            "range": "± 2311.1562814303957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552409.0680803573,
            "unit": "ns",
            "range": "± 1914.3588027903643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822787.0084635416,
            "unit": "ns",
            "range": "± 816.6584851195265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732732.2005208334,
            "unit": "ns",
            "range": "± 838.9397626761136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2994306.6666666665,
            "unit": "ns",
            "range": "± 46436.89214817194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3118162.0689655175,
            "unit": "ns",
            "range": "± 84073.96579285368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3851650,
            "unit": "ns",
            "range": "± 50914.02632794893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3417881.395348837,
            "unit": "ns",
            "range": "± 125113.12643975632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5910916.279069767,
            "unit": "ns",
            "range": "± 206754.64747495207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248987.87878787878,
            "unit": "ns",
            "range": "± 7845.729633682803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236296.07843137256,
            "unit": "ns",
            "range": "± 8393.853960709914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218744.73684210525,
            "unit": "ns",
            "range": "± 7548.176703714472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3794413.3333333335,
            "unit": "ns",
            "range": "± 36226.171807265586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3491123.3333333335,
            "unit": "ns",
            "range": "± 38516.813891870035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17245.744680851065,
            "unit": "ns",
            "range": "± 1555.3352433020425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79451.06382978724,
            "unit": "ns",
            "range": "± 4511.9374442979915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67810.81081081081,
            "unit": "ns",
            "range": "± 2287.6217373537115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76640,
            "unit": "ns",
            "range": "± 3770.1888976978757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4294.329896907217,
            "unit": "ns",
            "range": "± 732.0019740645268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15967.368421052632,
            "unit": "ns",
            "range": "± 1380.2899868970765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "0d5e95a141301e952a51f890115a1dcb07f7b656",
          "message": "docs: using global stylecop config on `Store`",
          "timestamp": "2023-07-17T12:13:45+09:00",
          "tree_id": "a975dd476816e1fc9392b9e0b9dde75235c09500",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0d5e95a141301e952a51f890115a1dcb07f7b656"
        },
        "date": 1689564623323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1610646.6666666667,
            "unit": "ns",
            "range": "± 27511.604477972218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616246.2365591396,
            "unit": "ns",
            "range": "± 153519.92899885343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1882197.9591836734,
            "unit": "ns",
            "range": "± 180355.79211206234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4822410.52631579,
            "unit": "ns",
            "range": "± 207357.56013312103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47596.875,
            "unit": "ns",
            "range": "± 4587.88916318651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6973713.333333333,
            "unit": "ns",
            "range": "± 33163.380550296875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17874830.769230768,
            "unit": "ns",
            "range": "± 38172.4024354285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46306192.307692304,
            "unit": "ns",
            "range": "± 221951.0248588581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92182525,
            "unit": "ns",
            "range": "± 742901.083743504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185114173.33333334,
            "unit": "ns",
            "range": "± 424047.36336988624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4990090.594951923,
            "unit": "ns",
            "range": "± 55013.87613821252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551741.15234375,
            "unit": "ns",
            "range": "± 21069.07385516624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148554.296875,
            "unit": "ns",
            "range": "± 6685.71928089702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583072.265625,
            "unit": "ns",
            "range": "± 4213.655862977905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812484.4010416666,
            "unit": "ns",
            "range": "± 6834.427923091089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764207.1847098215,
            "unit": "ns",
            "range": "± 3830.6538300678917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3098943.75,
            "unit": "ns",
            "range": "± 91768.94174694856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3284790,
            "unit": "ns",
            "range": "± 66469.16895112072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4053292.8571428573,
            "unit": "ns",
            "range": "± 140987.17532553014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3649766.6666666665,
            "unit": "ns",
            "range": "± 109376.88760275942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6108818.421052632,
            "unit": "ns",
            "range": "± 199130.3713315192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267145.8333333333,
            "unit": "ns",
            "range": "± 9613.309885276487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257136.0655737705,
            "unit": "ns",
            "range": "± 11106.049894642789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237932.3076923077,
            "unit": "ns",
            "range": "± 11141.82867189431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3990500,
            "unit": "ns",
            "range": "± 63561.46631411204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3595684.6153846155,
            "unit": "ns",
            "range": "± 23638.169914844868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21319.565217391304,
            "unit": "ns",
            "range": "± 1944.2357254560243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94200,
            "unit": "ns",
            "range": "± 7997.269942337338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75404.25531914894,
            "unit": "ns",
            "range": "± 8878.7884828595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92843.87755102041,
            "unit": "ns",
            "range": "± 12228.680723294494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5053.061224489796,
            "unit": "ns",
            "range": "± 832.4852968123787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19292.391304347828,
            "unit": "ns",
            "range": "± 1689.2832016296647"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "87e4f8142eeb927fe2986cc4969b0322bab14c6a",
          "message": "docs: using global stylecop config on `Common`",
          "timestamp": "2023-07-17T12:15:19+09:00",
          "tree_id": "78daeecc0181a8f68a8e9c7414664652dbe8623c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/87e4f8142eeb927fe2986cc4969b0322bab14c6a"
        },
        "date": 1689564874467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659637.2340425532,
            "unit": "ns",
            "range": "± 119431.29935400307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3087548,
            "unit": "ns",
            "range": "± 124683.2889642344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2177080.85106383,
            "unit": "ns",
            "range": "± 193946.06238139098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5743302.857142857,
            "unit": "ns",
            "range": "± 278287.2469289827"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58057.89473684211,
            "unit": "ns",
            "range": "± 4591.587565513752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9235163.888888888,
            "unit": "ns",
            "range": "± 300957.7114601013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24574211.53846154,
            "unit": "ns",
            "range": "± 166990.5163897117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62105569.23076923,
            "unit": "ns",
            "range": "± 623795.3635937235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127774638.63636364,
            "unit": "ns",
            "range": "± 4772505.669772158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248503871.42857143,
            "unit": "ns",
            "range": "± 4119032.1121180085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6071769.479166667,
            "unit": "ns",
            "range": "± 95522.3114120076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896708.5379464286,
            "unit": "ns",
            "range": "± 23922.262933943686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1489267.1484375,
            "unit": "ns",
            "range": "± 45421.54668289872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3250624.4401041665,
            "unit": "ns",
            "range": "± 33714.35566515127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019411.2369791666,
            "unit": "ns",
            "range": "± 9706.38495824828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955552.734375,
            "unit": "ns",
            "range": "± 8731.329208994122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3979452.1739130435,
            "unit": "ns",
            "range": "± 96186.80154009612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4209538.888888889,
            "unit": "ns",
            "range": "± 176990.77943861738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5097685,
            "unit": "ns",
            "range": "± 112121.89454714947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4673175,
            "unit": "ns",
            "range": "± 132376.31159074637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7687908,
            "unit": "ns",
            "range": "± 304168.5742599767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318054.71698113205,
            "unit": "ns",
            "range": "± 13265.420142346615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305244.23076923075,
            "unit": "ns",
            "range": "± 12457.80979493899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277479.38144329895,
            "unit": "ns",
            "range": "± 19867.79711275012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5071864.285714285,
            "unit": "ns",
            "range": "± 57256.3144941285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4504553.03030303,
            "unit": "ns",
            "range": "± 138389.66833918745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24557.608695652172,
            "unit": "ns",
            "range": "± 2215.4419942335808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106943.29896907216,
            "unit": "ns",
            "range": "± 8276.660296889264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97836.55913978495,
            "unit": "ns",
            "range": "± 10460.3785049382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118193.81443298969,
            "unit": "ns",
            "range": "± 19322.858950136568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7179.120879120879,
            "unit": "ns",
            "range": "± 1192.0585820351546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24439.583333333332,
            "unit": "ns",
            "range": "± 1892.6160767665185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7bcb60131b0e49eb22e13216c3e4f0a5fb7562c8",
          "message": "docs: using global stylecop config on `Common`",
          "timestamp": "2023-07-17T14:28:44+09:00",
          "tree_id": "6a2c9b63f9bc714feb8734623b5ed1e26b65d868",
          "url": "https://github.com/OnedgeLee/libplanet/commit/7bcb60131b0e49eb22e13216c3e4f0a5fb7562c8"
        },
        "date": 1689573553756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668070.1030927836,
            "unit": "ns",
            "range": "± 102902.34161263902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3102262.6506024096,
            "unit": "ns",
            "range": "± 164995.14827371208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2201156.5656565656,
            "unit": "ns",
            "range": "± 189523.93535856943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5731030,
            "unit": "ns",
            "range": "± 230405.98884117042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57495.78947368421,
            "unit": "ns",
            "range": "± 3868.418660632607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9011908.695652174,
            "unit": "ns",
            "range": "± 224906.93007036464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24419842.85714286,
            "unit": "ns",
            "range": "± 209405.99401562108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61852157.14285714,
            "unit": "ns",
            "range": "± 809362.216823826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122765021.42857143,
            "unit": "ns",
            "range": "± 1226752.4215326677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246454740,
            "unit": "ns",
            "range": "± 1964964.3507489609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5896799.399038462,
            "unit": "ns",
            "range": "± 33593.17821423798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893414.1880580357,
            "unit": "ns",
            "range": "± 7714.330242315311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456062.2786458333,
            "unit": "ns",
            "range": "± 8443.019291294491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3212858.6067708335,
            "unit": "ns",
            "range": "± 7920.8817316594195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1018895.5496651785,
            "unit": "ns",
            "range": "± 2630.1481546282785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955499.0025111607,
            "unit": "ns",
            "range": "± 4591.092007401062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4077114.6341463416,
            "unit": "ns",
            "range": "± 144587.4347254553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4198058.695652174,
            "unit": "ns",
            "range": "± 159790.28975655278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5035606.666666667,
            "unit": "ns",
            "range": "± 92683.8055407945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4589202.94117647,
            "unit": "ns",
            "range": "± 146999.55779214896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7539975,
            "unit": "ns",
            "range": "± 212804.90217306765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311880.55555555556,
            "unit": "ns",
            "range": "± 10373.835754144571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297341.0714285714,
            "unit": "ns",
            "range": "± 11992.903610593517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276296.73913043475,
            "unit": "ns",
            "range": "± 15593.401331141848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4887968.75,
            "unit": "ns",
            "range": "± 92039.88786571469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4629420,
            "unit": "ns",
            "range": "± 62800.343493146145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25708.602150537634,
            "unit": "ns",
            "range": "± 1850.185414561523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106718.36734693877,
            "unit": "ns",
            "range": "± 7073.332333253878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92981.25,
            "unit": "ns",
            "range": "± 8435.879668977841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113842.70833333333,
            "unit": "ns",
            "range": "± 16948.893736864033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7094.210526315789,
            "unit": "ns",
            "range": "± 1013.8105691404008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24172.448979591838,
            "unit": "ns",
            "range": "± 2302.2526222257493"
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
          "id": "264659769ec8e4644cf9860cd1e02b794ad8121b",
          "message": "Add Libplanet.Store project to solution",
          "timestamp": "2023-07-17T14:48:55+09:00",
          "tree_id": "dd545c09e16b1caa70d4c12f1f62c163f30e6be3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/264659769ec8e4644cf9860cd1e02b794ad8121b"
        },
        "date": 1689574017665,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498625.2525252525,
            "unit": "ns",
            "range": "± 102940.74513458776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679776.506024096,
            "unit": "ns",
            "range": "± 141946.7558064809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1921774.358974359,
            "unit": "ns",
            "range": "± 99191.12135054503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5200642.424242424,
            "unit": "ns",
            "range": "± 244488.40152487086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53883.333333333336,
            "unit": "ns",
            "range": "± 4559.47057560684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7434552,
            "unit": "ns",
            "range": "± 190420.71648501552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20873306.666666668,
            "unit": "ns",
            "range": "± 249467.41117447632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53565514.28571428,
            "unit": "ns",
            "range": "± 344515.38506930356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107839860,
            "unit": "ns",
            "range": "± 913989.5129126405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212620561.53846154,
            "unit": "ns",
            "range": "± 1028190.8938668779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4903566.041666667,
            "unit": "ns",
            "range": "± 18986.506225138688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1589492.0572916667,
            "unit": "ns",
            "range": "± 5562.008428595081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1208342.3567708333,
            "unit": "ns",
            "range": "± 5946.101663871343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2708830.106026786,
            "unit": "ns",
            "range": "± 14119.751521704435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854863.26171875,
            "unit": "ns",
            "range": "± 2965.7851502995086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797272.5325520834,
            "unit": "ns",
            "range": "± 2385.783522862715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3482038.4615384615,
            "unit": "ns",
            "range": "± 42465.13351094712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3641804.1666666665,
            "unit": "ns",
            "range": "± 127130.7501820231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4425806.666666667,
            "unit": "ns",
            "range": "± 78328.95347431212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4003536.9565217393,
            "unit": "ns",
            "range": "± 151803.38944934393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6308523.2558139535,
            "unit": "ns",
            "range": "± 231551.04120773324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272071.73913043475,
            "unit": "ns",
            "range": "± 9319.958584635646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259996.9696969697,
            "unit": "ns",
            "range": "± 7277.683562116659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232196.9387755102,
            "unit": "ns",
            "range": "± 14394.575539601195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197707.142857143,
            "unit": "ns",
            "range": "± 69824.43328460664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3779682.3529411764,
            "unit": "ns",
            "range": "± 74352.64987959506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24937,
            "unit": "ns",
            "range": "± 3780.215776001591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96648.97959183673,
            "unit": "ns",
            "range": "± 8263.423879105125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77612.90322580645,
            "unit": "ns",
            "range": "± 4703.7040401214335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100230.23255813954,
            "unit": "ns",
            "range": "± 8992.599176282707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5743.010752688172,
            "unit": "ns",
            "range": "± 1013.7530195593658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21303.684210526317,
            "unit": "ns",
            "range": "± 2146.338323072219"
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
          "id": "6bd69693c90f120f7945486b68a3123b60cef526",
          "message": "Add Libplanet.Store project to solution",
          "timestamp": "2023-07-17T14:57:20+09:00",
          "tree_id": "6426e56214ee1ebdf31142b3a8e13e60a0e00157",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6bd69693c90f120f7945486b68a3123b60cef526"
        },
        "date": 1689574808051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713280,
            "unit": "ns",
            "range": "± 181002.22380202016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3335783.505154639,
            "unit": "ns",
            "range": "± 238350.5138098495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204178.16091954,
            "unit": "ns",
            "range": "± 151445.93741454126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6253876.842105263,
            "unit": "ns",
            "range": "± 501715.2658317714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58842.391304347824,
            "unit": "ns",
            "range": "± 4941.131109008044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9694850,
            "unit": "ns",
            "range": "± 184403.27545897875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25182625,
            "unit": "ns",
            "range": "± 710487.2754744529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63904229.8245614,
            "unit": "ns",
            "range": "± 2745619.9518483016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131041653.33333333,
            "unit": "ns",
            "range": "± 4931042.446702504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263109737.5,
            "unit": "ns",
            "range": "± 11999104.728118218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6267718.453663793,
            "unit": "ns",
            "range": "± 176884.21867618905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990334.5880681819,
            "unit": "ns",
            "range": "± 48273.14610028467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1516356.5848214286,
            "unit": "ns",
            "range": "± 54550.09133918778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3352375.9635416665,
            "unit": "ns",
            "range": "± 53287.47465343116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1114318.3458533655,
            "unit": "ns",
            "range": "± 51730.02985524299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1016310.8099724265,
            "unit": "ns",
            "range": "± 53124.186207707564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4100264.285714286,
            "unit": "ns",
            "range": "± 56697.193081286685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4279854.385964912,
            "unit": "ns",
            "range": "± 184072.84182217438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5123066.666666667,
            "unit": "ns",
            "range": "± 60493.38413256051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4587104.166666667,
            "unit": "ns",
            "range": "± 169564.29391090432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7666010.810810811,
            "unit": "ns",
            "range": "± 243182.37301775502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325164,
            "unit": "ns",
            "range": "± 13112.959161043082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310755.55555555556,
            "unit": "ns",
            "range": "± 10634.390087130174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297311.39240506326,
            "unit": "ns",
            "range": "± 15419.202042456523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5206646.428571428,
            "unit": "ns",
            "range": "± 207388.81881343355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4817610,
            "unit": "ns",
            "range": "± 355408.05723290436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28002.247191011236,
            "unit": "ns",
            "range": "± 2989.07014760329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113766.48351648351,
            "unit": "ns",
            "range": "± 10222.722661212061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109331.25,
            "unit": "ns",
            "range": "± 13746.366505562957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124918.27956989247,
            "unit": "ns",
            "range": "± 16384.742015698357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8388.172043010753,
            "unit": "ns",
            "range": "± 1309.0694888359499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27846.808510638297,
            "unit": "ns",
            "range": "± 2113.2176011012707"
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
          "id": "17906009b9b705092e3b4789092e5c3263f00fc2",
          "message": "Add Libplanet.Store project to solution",
          "timestamp": "2023-07-17T15:39:13+09:00",
          "tree_id": "163c115b6db70e87d2d5048617ae9ecfe10b7d8c",
          "url": "https://github.com/OnedgeLee/libplanet/commit/17906009b9b705092e3b4789092e5c3263f00fc2"
        },
        "date": 1689577035227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396139,
            "unit": "ns",
            "range": "± 92216.3813478326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2564621.7391304346,
            "unit": "ns",
            "range": "± 98734.6498067612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1807650,
            "unit": "ns",
            "range": "± 97759.80137411227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5047657.692307692,
            "unit": "ns",
            "range": "± 260578.80903726752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46456.84210526316,
            "unit": "ns",
            "range": "± 3262.2160798144223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7062180,
            "unit": "ns",
            "range": "± 53185.63447290738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20023092.85714286,
            "unit": "ns",
            "range": "± 175883.8054568357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51679940,
            "unit": "ns",
            "range": "± 805815.5583010296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102766513.33333333,
            "unit": "ns",
            "range": "± 1466282.521435302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204563000,
            "unit": "ns",
            "range": "± 2030946.0476761633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4972100.625,
            "unit": "ns",
            "range": "± 32583.199719037173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539240.5859375,
            "unit": "ns",
            "range": "± 6484.297354076053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1203334.9088541667,
            "unit": "ns",
            "range": "± 6005.351561659095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689855.234375,
            "unit": "ns",
            "range": "± 9101.903612457449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851881.0616629465,
            "unit": "ns",
            "range": "± 2742.1184828465116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776852.5390625,
            "unit": "ns",
            "range": "± 2706.093269675284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310653.846153846,
            "unit": "ns",
            "range": "± 136085.83718725567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3562769.230769231,
            "unit": "ns",
            "range": "± 95213.69552425017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237553.571428572,
            "unit": "ns",
            "range": "± 118484.85285952318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3897785.714285714,
            "unit": "ns",
            "range": "± 166564.59781944437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6415239.393939394,
            "unit": "ns",
            "range": "± 200888.3348706968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268874.4680851064,
            "unit": "ns",
            "range": "± 9437.6781430951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255259.5744680851,
            "unit": "ns",
            "range": "± 8442.894094121479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225602,
            "unit": "ns",
            "range": "± 11080.654678677975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4240093.333333333,
            "unit": "ns",
            "range": "± 66569.67849733161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839468,
            "unit": "ns",
            "range": "± 93998.7398851708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21658.064516129034,
            "unit": "ns",
            "range": "± 2010.0466456108813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86793.81443298969,
            "unit": "ns",
            "range": "± 6281.152601782005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72569.51219512195,
            "unit": "ns",
            "range": "± 3847.0989237968747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97686.59793814433,
            "unit": "ns",
            "range": "± 17681.862345741345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5538.144329896907,
            "unit": "ns",
            "range": "± 915.8833735535819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18973.11827956989,
            "unit": "ns",
            "range": "± 1800.6725666760235"
          }
        ]
      }
    ]
  }
}