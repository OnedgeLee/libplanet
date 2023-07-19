window.BENCHMARK_DATA = {
  "lastUpdate": 1689748649708,
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
          "id": "45dee65124543713e956792c50e6e862fe67662c",
          "message": "refactor: Introduce Libplanet.Crypto & Libplanet.Types",
          "timestamp": "2023-07-18T18:09:27+09:00",
          "tree_id": "66f7ec611cd49e0650ce17afce73cb20917c79b2",
          "url": "https://github.com/OnedgeLee/libplanet/commit/45dee65124543713e956792c50e6e862fe67662c"
        },
        "date": 1689672203505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282207.01960784313,
            "unit": "ns",
            "range": "± 11367.743249194533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268670.2545454545,
            "unit": "ns",
            "range": "± 10527.668635408776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244383.65625,
            "unit": "ns",
            "range": "± 7466.051932492122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4295166.571428572,
            "unit": "ns",
            "range": "± 27868.12843406572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3941882.3333333335,
            "unit": "ns",
            "range": "± 24170.68669355704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18657.989247311827,
            "unit": "ns",
            "range": "± 1705.6806335877081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90634.40816326531,
            "unit": "ns",
            "range": "± 5969.802880298762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74093.72,
            "unit": "ns",
            "range": "± 1913.0105096418054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92457.05208333333,
            "unit": "ns",
            "range": "± 9527.04844597715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4668.020618556701,
            "unit": "ns",
            "range": "± 767.2108708847788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18267.305263157894,
            "unit": "ns",
            "range": "± 1901.1078968881022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423478.4842105263,
            "unit": "ns",
            "range": "± 118745.15202178966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626801.275862069,
            "unit": "ns",
            "range": "± 76206.20389157328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1837136.7731958763,
            "unit": "ns",
            "range": "± 119814.38069229081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4797404.074074074,
            "unit": "ns",
            "range": "± 133932.23074517542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6324075.2125,
            "unit": "ns",
            "range": "± 25453.70578726941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1997271.628627232,
            "unit": "ns",
            "range": "± 4874.616632456476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367541.1396484375,
            "unit": "ns",
            "range": "± 529.6507822607524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2558778.7912946427,
            "unit": "ns",
            "range": "± 2657.6265887330796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808441.7493722098,
            "unit": "ns",
            "range": "± 393.2413122054414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737475.2611979167,
            "unit": "ns",
            "range": "± 628.1321233142261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3281854.2666666666,
            "unit": "ns",
            "range": "± 52246.318640601254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3599703.466666667,
            "unit": "ns",
            "range": "± 51163.28209184321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287214.733333333,
            "unit": "ns",
            "range": "± 38289.13020029625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3876824.588235294,
            "unit": "ns",
            "range": "± 78411.78326394799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6395001.428571428,
            "unit": "ns",
            "range": "± 108968.96679402418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7675638.733333333,
            "unit": "ns",
            "range": "± 55771.97970495152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19524845.666666668,
            "unit": "ns",
            "range": "± 167861.74421727742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50240240.4,
            "unit": "ns",
            "range": "± 301582.68331416417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100381754.53333333,
            "unit": "ns",
            "range": "± 513037.7052115129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200639063.7857143,
            "unit": "ns",
            "range": "± 733202.301583443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45833.58947368421,
            "unit": "ns",
            "range": "± 2658.260959664279"
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
          "id": "abf9c43357a91f1cc5b7a04cd823d992ad43efbb",
          "message": "refactor: Introduce Libplanet.Crypto & Libplanet.Types",
          "timestamp": "2023-07-18T20:52:19+09:00",
          "tree_id": "95a6ef7580cb096f5f752ae0c63048c70adeddc0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/abf9c43357a91f1cc5b7a04cd823d992ad43efbb"
        },
        "date": 1689681994696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295189.9411764706,
            "unit": "ns",
            "range": "± 11998.158916120032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282087.2950819672,
            "unit": "ns",
            "range": "± 12236.41729884509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250807.2,
            "unit": "ns",
            "range": "± 9379.170097033686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4482902.733333333,
            "unit": "ns",
            "range": "± 61149.191899188736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4101065.1333333333,
            "unit": "ns",
            "range": "± 54654.80119266306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20002.489583333332,
            "unit": "ns",
            "range": "± 1484.6514529452545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87987.29761904762,
            "unit": "ns",
            "range": "± 4290.835677810344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73969.57894736843,
            "unit": "ns",
            "range": "± 1586.8985235283976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87441.421686747,
            "unit": "ns",
            "range": "± 6825.829030539668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4935.5268817204305,
            "unit": "ns",
            "range": "± 557.1162471661323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18039.744680851065,
            "unit": "ns",
            "range": "± 1525.4696081892405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1502020.3085106383,
            "unit": "ns",
            "range": "± 96175.96673738996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2801034.5853658537,
            "unit": "ns",
            "range": "± 99887.63233077845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1867124.9473684211,
            "unit": "ns",
            "range": "± 87979.63970781644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5023240.151515151,
            "unit": "ns",
            "range": "± 155181.3051705813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6002625.025111607,
            "unit": "ns",
            "range": "± 16912.604982503795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1909984.5652901786,
            "unit": "ns",
            "range": "± 5275.883741671572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389431.9256510416,
            "unit": "ns",
            "range": "± 1957.589436059375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649423.2671875,
            "unit": "ns",
            "range": "± 4084.0510005183833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830912.48125,
            "unit": "ns",
            "range": "± 978.7820389848142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777826.6002604166,
            "unit": "ns",
            "range": "± 354.86488794415396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3459188.44,
            "unit": "ns",
            "range": "± 88795.38480221442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3618693.4285714286,
            "unit": "ns",
            "range": "± 100435.51346065704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4465825.529411765,
            "unit": "ns",
            "range": "± 86600.48358851529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4116723.5897435895,
            "unit": "ns",
            "range": "± 143674.69952817535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6754921.918918919,
            "unit": "ns",
            "range": "± 227906.38161441765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8264579,
            "unit": "ns",
            "range": "± 233230.6787770743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22615138.2,
            "unit": "ns",
            "range": "± 230529.629546585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55988633.06666667,
            "unit": "ns",
            "range": "± 564200.001480917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109817986.13333334,
            "unit": "ns",
            "range": "± 1731272.2865171756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218318623.15384614,
            "unit": "ns",
            "range": "± 2477953.8476003357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45708.69662921348,
            "unit": "ns",
            "range": "± 2538.5745481403105"
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
          "id": "005b2c2fb90da6488e7941546569bb8f7559da40",
          "message": "Update projects to reveal hidden refences",
          "timestamp": "2023-07-19T09:55:03+09:00",
          "tree_id": "01b5b1a20f53dbb91b7ecff5e3794df6d6fb50cc",
          "url": "https://github.com/OnedgeLee/libplanet/commit/005b2c2fb90da6488e7941546569bb8f7559da40"
        },
        "date": 1689728922561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283213.5625,
            "unit": "ns",
            "range": "± 9407.140816232963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268677.7878787879,
            "unit": "ns",
            "range": "± 7981.37509987148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237049.16216216216,
            "unit": "ns",
            "range": "± 7982.851420783573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4343896.4,
            "unit": "ns",
            "range": "± 32547.918857761524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933656.3571428573,
            "unit": "ns",
            "range": "± 28843.09664802399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18035.34375,
            "unit": "ns",
            "range": "± 1585.7937931131892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90616.87654320987,
            "unit": "ns",
            "range": "± 4684.340618973807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72335.05882352941,
            "unit": "ns",
            "range": "± 1483.086075999478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88955.73469387754,
            "unit": "ns",
            "range": "± 11258.266248342938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4670.408163265306,
            "unit": "ns",
            "range": "± 706.9550188629833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18448.928571428572,
            "unit": "ns",
            "range": "± 1856.7985764773323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441103.7789473685,
            "unit": "ns",
            "range": "± 104262.90809215707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648891.840909091,
            "unit": "ns",
            "range": "± 98942.11949909959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1821280.2584269664,
            "unit": "ns",
            "range": "± 89310.04100813995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4900690.2,
            "unit": "ns",
            "range": "± 173679.43118583702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6338235.966145833,
            "unit": "ns",
            "range": "± 27307.40695670216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887994.1470052083,
            "unit": "ns",
            "range": "± 6637.363680571711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355108.0727864583,
            "unit": "ns",
            "range": "± 1726.7954974329589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572794.0809151786,
            "unit": "ns",
            "range": "± 1808.6460855842258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807733.3524693081,
            "unit": "ns",
            "range": "± 609.0706960449768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743901.0422526042,
            "unit": "ns",
            "range": "± 446.7787450632217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3318818.1875,
            "unit": "ns",
            "range": "± 42213.5750996742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3535429.0714285714,
            "unit": "ns",
            "range": "± 40653.644392343485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4265733.571428572,
            "unit": "ns",
            "range": "± 41354.801045277745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3898421.4,
            "unit": "ns",
            "range": "± 69756.0804464897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6460031.928571428,
            "unit": "ns",
            "range": "± 80768.13196425002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7745035.466666667,
            "unit": "ns",
            "range": "± 66826.17415767853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19618882.769230768,
            "unit": "ns",
            "range": "± 62249.7621162173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50629878.78571428,
            "unit": "ns",
            "range": "± 242000.40319679654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101363328.42857143,
            "unit": "ns",
            "range": "± 429491.4145220017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201878421.26666668,
            "unit": "ns",
            "range": "± 966773.6262502545"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47787.782608695656,
            "unit": "ns",
            "range": "± 3326.4628140594914"
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
          "id": "ce23b0024edda13862225aad4ae0a2efaaeae850",
          "message": "Update projects to reveal hidden refences",
          "timestamp": "2023-07-19T14:04:00+09:00",
          "tree_id": "19ae7191bae602941c0918da55a80d4682402d09",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ce23b0024edda13862225aad4ae0a2efaaeae850"
        },
        "date": 1689744012069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277542.51,
            "unit": "ns",
            "range": "± 38216.44051592154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262569.47,
            "unit": "ns",
            "range": "± 34282.657436349364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266073.18,
            "unit": "ns",
            "range": "± 30267.25728778292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5048986.825,
            "unit": "ns",
            "range": "± 172513.9137578344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4759910.0625,
            "unit": "ns",
            "range": "± 148013.35597537388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22373.247311827956,
            "unit": "ns",
            "range": "± 1528.6581260808164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103647.55208333333,
            "unit": "ns",
            "range": "± 7055.23223068084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101093.38775510204,
            "unit": "ns",
            "range": "± 9559.262465223128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116051.54639175258,
            "unit": "ns",
            "range": "± 15204.272298450513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5340.959183673469,
            "unit": "ns",
            "range": "± 1508.36910573692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17003.702127659573,
            "unit": "ns",
            "range": "± 2400.038887811232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1513232.1,
            "unit": "ns",
            "range": "± 135630.35933083761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947134.878787879,
            "unit": "ns",
            "range": "± 219801.99347447354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1999057.121212121,
            "unit": "ns",
            "range": "± 177866.24740731638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5569678.62,
            "unit": "ns",
            "range": "± 535620.9205820542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5829967.814174107,
            "unit": "ns",
            "range": "± 164215.74857584442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958498.1123046875,
            "unit": "ns",
            "range": "± 26868.365378152666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331899.1099694294,
            "unit": "ns",
            "range": "± 31356.81260948728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592475.8822916667,
            "unit": "ns",
            "range": "± 39369.31760627552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808007.5285295759,
            "unit": "ns",
            "range": "± 11186.79028698706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794697.1749403211,
            "unit": "ns",
            "range": "± 26488.52411820665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3342144.393939394,
            "unit": "ns",
            "range": "± 324210.1942869597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440242.26,
            "unit": "ns",
            "range": "± 354496.00611332065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4191830.19,
            "unit": "ns",
            "range": "± 382811.83780540724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3687466.6868686867,
            "unit": "ns",
            "range": "± 402720.9043670279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6424299.02,
            "unit": "ns",
            "range": "± 589313.8734429926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7700626.97,
            "unit": "ns",
            "range": "± 528465.7247670513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20421613.14925373,
            "unit": "ns",
            "range": "± 963340.5213455473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52105912.02,
            "unit": "ns",
            "range": "± 3163143.4432954765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123863999.49275362,
            "unit": "ns",
            "range": "± 5971605.570467565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201286148,
            "unit": "ns",
            "range": "± 4218888.504747192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47131.12765957447,
            "unit": "ns",
            "range": "± 5257.271632299959"
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
          "id": "81f2383851c772fbd241407fc92580c3581db6fd",
          "message": "Apply review changes",
          "timestamp": "2023-07-19T14:19:59+09:00",
          "tree_id": "a1f7c152da874b1285ff9e564b6c908a250f906d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/81f2383851c772fbd241407fc92580c3581db6fd"
        },
        "date": 1689745116785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324715.05670103093,
            "unit": "ns",
            "range": "± 21258.730055246855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302885.7888888889,
            "unit": "ns",
            "range": "± 21860.8970865068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270126.75257731957,
            "unit": "ns",
            "range": "± 25028.14670776972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4732835.59,
            "unit": "ns",
            "range": "± 309131.0379097078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4392818.84,
            "unit": "ns",
            "range": "± 302767.6735758287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20049.698924731183,
            "unit": "ns",
            "range": "± 1490.4962391107126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97864.10309278351,
            "unit": "ns",
            "range": "± 9470.657205597077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84616.05263157895,
            "unit": "ns",
            "range": "± 7269.193274284472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106877.07216494845,
            "unit": "ns",
            "range": "± 14412.796547431544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5312.731958762886,
            "unit": "ns",
            "range": "± 644.9395242233945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19375.483870967742,
            "unit": "ns",
            "range": "± 1755.2296927164682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625881.5280898877,
            "unit": "ns",
            "range": "± 89586.29383425004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3128574.101010101,
            "unit": "ns",
            "range": "± 198734.33593822183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2120891.5408163266,
            "unit": "ns",
            "range": "± 155437.72725682257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6054023.08,
            "unit": "ns",
            "range": "± 413049.37712509366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6699556.901953125,
            "unit": "ns",
            "range": "± 234774.73672480913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2065955.0901017098,
            "unit": "ns",
            "range": "± 85537.0632872118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1457875.9532912234,
            "unit": "ns",
            "range": "± 56515.293738555265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2874045.771654212,
            "unit": "ns",
            "range": "± 72161.59820527631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900251.6946940104,
            "unit": "ns",
            "range": "± 14624.759193239652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800878.0369657628,
            "unit": "ns",
            "range": "± 15264.323291742088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3790863.3092783503,
            "unit": "ns",
            "range": "± 289129.57662912435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4004367.1157894735,
            "unit": "ns",
            "range": "± 333271.70318090834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4656603.27368421,
            "unit": "ns",
            "range": "± 339720.40871022665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4485619.729166667,
            "unit": "ns",
            "range": "± 313484.63447903184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7295159.68,
            "unit": "ns",
            "range": "± 475757.4496396815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8850714.91025641,
            "unit": "ns",
            "range": "± 456270.9862941922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22993894.337837838,
            "unit": "ns",
            "range": "± 1146549.2884221284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59121377.07692308,
            "unit": "ns",
            "range": "± 2403617.140626878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121543411.53846154,
            "unit": "ns",
            "range": "± 6231496.629537944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229308633.8452381,
            "unit": "ns",
            "range": "± 12296339.766646003"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51372.333333333336,
            "unit": "ns",
            "range": "± 3355.7729913505636"
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
          "id": "087f88e0f8330e66ee061bd5149c18ab108bb17b",
          "message": "Apply review changes",
          "timestamp": "2023-07-19T15:20:02+09:00",
          "tree_id": "fe4f605f3dbce88474f42611a5073802caf510ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/087f88e0f8330e66ee061bd5149c18ab108bb17b"
        },
        "date": 1689748636238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278699.88372093026,
            "unit": "ns",
            "range": "± 9329.590745909343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262928.53846153844,
            "unit": "ns",
            "range": "± 3201.680278004677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228671.2,
            "unit": "ns",
            "range": "± 2594.888222200387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4200155.428571428,
            "unit": "ns",
            "range": "± 25528.086196954147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3711613.533333333,
            "unit": "ns",
            "range": "± 53090.11229284288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16608.092783505155,
            "unit": "ns",
            "range": "± 1301.7754789331168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84043.81081081081,
            "unit": "ns",
            "range": "± 3886.918741906357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70672.8,
            "unit": "ns",
            "range": "± 1246.4151567022695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86784.92857142857,
            "unit": "ns",
            "range": "± 12603.965754770308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4448.938775510204,
            "unit": "ns",
            "range": "± 497.0251049753973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15746.697916666666,
            "unit": "ns",
            "range": "± 1241.2293152549394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328120.3186813188,
            "unit": "ns",
            "range": "± 77029.26071837595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577400.8035714286,
            "unit": "ns",
            "range": "± 109678.66688773075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707352.880952381,
            "unit": "ns",
            "range": "± 91063.92011657364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4888407.73015873,
            "unit": "ns",
            "range": "± 214510.9454726898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5960271.864955357,
            "unit": "ns",
            "range": "± 20169.735282995007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963134.29140625,
            "unit": "ns",
            "range": "± 3201.4236417380484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352728.5970052083,
            "unit": "ns",
            "range": "± 1538.5638810407345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565821.093191964,
            "unit": "ns",
            "range": "± 4003.850618011982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815360.6281389509,
            "unit": "ns",
            "range": "± 684.0990106248375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749750.4399414062,
            "unit": "ns",
            "range": "± 2982.156277345589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232163.703703704,
            "unit": "ns",
            "range": "± 88321.6998289665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3365316.7333333334,
            "unit": "ns",
            "range": "± 56801.70297304558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4155663.529411765,
            "unit": "ns",
            "range": "± 80465.23008116428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3652822.4615384615,
            "unit": "ns",
            "range": "± 42103.45180745356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6340277.2,
            "unit": "ns",
            "range": "± 136438.90927200104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7480613.2,
            "unit": "ns",
            "range": "± 7836.518552812303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19086370,
            "unit": "ns",
            "range": "± 123389.42250857648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48806728.13333333,
            "unit": "ns",
            "range": "± 369635.4064845263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96092096,
            "unit": "ns",
            "range": "± 882470.9269937128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194344210.13333333,
            "unit": "ns",
            "range": "± 1623325.8558242999"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45841.085106382976,
            "unit": "ns",
            "range": "± 2733.2712436938546"
          }
        ]
      }
    ]
  }
}