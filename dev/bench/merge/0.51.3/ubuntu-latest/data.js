window.BENCHMARK_DATA = {
  "lastUpdate": 1679987590657,
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
          "id": "3f3a8c071c130faeb8b083500deeecf45691de03",
          "message": "Merge tag '0.51.3'\n\nLibplanet 0.51.3",
          "timestamp": "2023-03-17T18:39:53+09:00",
          "tree_id": "4ccc01c42d212fef3385f0dfa0111317b04c5fa8",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3f3a8c071c130faeb8b083500deeecf45691de03"
        },
        "date": 1679046764902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315535.6,
            "unit": "ns",
            "range": "± 59162.73830207659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5237513.111111111,
            "unit": "ns",
            "range": "± 111876.07659837625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23832896.066666666,
            "unit": "ns",
            "range": "± 231276.81503201395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6288382.2,
            "unit": "ns",
            "range": "± 99591.87387977853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27101449.533333335,
            "unit": "ns",
            "range": "± 357459.70259634394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7694591.428571428,
            "unit": "ns",
            "range": "± 25069.53157401748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19775428.266666666,
            "unit": "ns",
            "range": "± 129695.55329664858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51292274.4,
            "unit": "ns",
            "range": "± 459461.2414814614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102363954.73333333,
            "unit": "ns",
            "range": "± 734927.3160460414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204957023.26666668,
            "unit": "ns",
            "range": "± 1074745.788749166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1347841.0204081633,
            "unit": "ns",
            "range": "± 93544.0745472785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2468699.0625,
            "unit": "ns",
            "range": "± 48181.58995365865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169975.1136363638,
            "unit": "ns",
            "range": "± 112612.89464124964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5183678.068181818,
            "unit": "ns",
            "range": "± 191439.56820017553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46131.56,
            "unit": "ns",
            "range": "± 1875.302535157287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5929022.221354167,
            "unit": "ns",
            "range": "± 17761.496591551317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1818327.6681189905,
            "unit": "ns",
            "range": "± 966.8740288864028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350643.139423077,
            "unit": "ns",
            "range": "± 1112.2902472359488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587557.5167410714,
            "unit": "ns",
            "range": "± 2954.241073729076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825992.8716517857,
            "unit": "ns",
            "range": "± 1230.1791466631512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740130.7598407452,
            "unit": "ns",
            "range": "± 719.4461124952269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199981.33333333334,
            "unit": "ns",
            "range": "± 2754.1153779664924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198920.72727272726,
            "unit": "ns",
            "range": "± 4766.44339985095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166248.22222222222,
            "unit": "ns",
            "range": "± 2946.7629608966545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11621581.466666667,
            "unit": "ns",
            "range": "± 113443.13503744424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9509725,
            "unit": "ns",
            "range": "± 64213.04440576808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18782.957894736843,
            "unit": "ns",
            "range": "± 1446.4594625953714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53861.269662921346,
            "unit": "ns",
            "range": "± 2997.866558692747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38506.4,
            "unit": "ns",
            "range": "± 707.2173640402222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86836.64583333333,
            "unit": "ns",
            "range": "± 11812.673285371513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4800.979166666667,
            "unit": "ns",
            "range": "± 566.2834882239529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18059.989247311827,
            "unit": "ns",
            "range": "± 1355.9592344666182"
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
          "id": "ccb0f3331688abc89ce2754f723988effacb7d06",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-28T15:57:55+09:00",
          "tree_id": "5b73ce549a165734ec22033c7db960cbfbe91243",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ccb0f3331688abc89ce2754f723988effacb7d06"
        },
        "date": 1679987578135,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3593127.8571428573,
            "unit": "ns",
            "range": "± 44369.182556671614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5494166.466666667,
            "unit": "ns",
            "range": "± 95115.95610912178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25832350.4,
            "unit": "ns",
            "range": "± 423610.90646080254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6741037.040816327,
            "unit": "ns",
            "range": "± 266714.1972235105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28944110,
            "unit": "ns",
            "range": "± 389925.26613625407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8112094.714285715,
            "unit": "ns",
            "range": "± 138075.6840935872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21575622.8,
            "unit": "ns",
            "range": "± 190474.82180712794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55192498.8,
            "unit": "ns",
            "range": "± 399608.3591246738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110383442.57142857,
            "unit": "ns",
            "range": "± 1399363.2733849797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239858661.2,
            "unit": "ns",
            "range": "± 1187369.7696946568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1451968.2,
            "unit": "ns",
            "range": "± 96334.6339617517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2714246.282051282,
            "unit": "ns",
            "range": "± 91642.65278987575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2299919.7252747254,
            "unit": "ns",
            "range": "± 127590.77162249504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5621937.721311475,
            "unit": "ns",
            "range": "± 250596.0290854673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50666.07142857143,
            "unit": "ns",
            "range": "± 2457.8464906571385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6022324.116071428,
            "unit": "ns",
            "range": "± 17127.867354184735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874985.831752232,
            "unit": "ns",
            "range": "± 2697.472461906818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345148.623046875,
            "unit": "ns",
            "range": "± 2835.090674222753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630548.658072917,
            "unit": "ns",
            "range": "± 1804.323524346538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840838.2770182291,
            "unit": "ns",
            "range": "± 382.2292312969617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759655.4426618303,
            "unit": "ns",
            "range": "± 917.7927441713889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205984.63461538462,
            "unit": "ns",
            "range": "± 8451.355758574713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205186.13698630137,
            "unit": "ns",
            "range": "± 10229.592783134229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175915.16666666666,
            "unit": "ns",
            "range": "± 7748.630943410271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12237138,
            "unit": "ns",
            "range": "± 192267.77140785416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9998106.266666668,
            "unit": "ns",
            "range": "± 164230.6848562484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22719.372340425532,
            "unit": "ns",
            "range": "± 2087.027118464256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59715.62365591398,
            "unit": "ns",
            "range": "± 4992.325361980037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44093.180722891564,
            "unit": "ns",
            "range": "± 2314.428692843659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101079.65957446808,
            "unit": "ns",
            "range": "± 13126.777770479415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6601.071428571428,
            "unit": "ns",
            "range": "± 936.8619065576114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21042.107526881722,
            "unit": "ns",
            "range": "± 1899.2753850646027"
          }
        ]
      }
    ]
  }
}