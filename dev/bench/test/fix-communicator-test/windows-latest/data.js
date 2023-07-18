window.BENCHMARK_DATA = {
  "lastUpdate": 1689641884174,
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641577485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413236.0824742268,
            "unit": "ns",
            "range": "± 127319.04003457792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2498280.120481928,
            "unit": "ns",
            "range": "± 128728.87345961055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790004.1237113401,
            "unit": "ns",
            "range": "± 124720.28029214496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4722120.786516854,
            "unit": "ns",
            "range": "± 260167.68115715781"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43632.97872340425,
            "unit": "ns",
            "range": "± 2663.3872966610693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6956085.714285715,
            "unit": "ns",
            "range": "± 70321.8409790395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17803100,
            "unit": "ns",
            "range": "± 91305.9065527996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44956375,
            "unit": "ns",
            "range": "± 212074.249969203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92118435.71428572,
            "unit": "ns",
            "range": "± 1367322.8168759018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182969842.85714287,
            "unit": "ns",
            "range": "± 2108915.001556774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4969027.734375,
            "unit": "ns",
            "range": "± 26711.188760151967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502146.4393028845,
            "unit": "ns",
            "range": "± 2523.3685175566925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160557.5721153845,
            "unit": "ns",
            "range": "± 4066.788120348244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546154.296875,
            "unit": "ns",
            "range": "± 21411.34694526343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831322.3911830357,
            "unit": "ns",
            "range": "± 3650.7044871889398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747165.3459821428,
            "unit": "ns",
            "range": "± 4414.347921386458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088700,
            "unit": "ns",
            "range": "± 54762.115858806384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3163880,
            "unit": "ns",
            "range": "± 55702.40056381259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3985757.1428571427,
            "unit": "ns",
            "range": "± 53387.27469070788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3567225,
            "unit": "ns",
            "range": "± 92100.94296831153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5910051.724137931,
            "unit": "ns",
            "range": "± 169010.71314456806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253611.11111111112,
            "unit": "ns",
            "range": "± 8996.772709806512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242681.6326530612,
            "unit": "ns",
            "range": "± 9204.588381829552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226931.86813186813,
            "unit": "ns",
            "range": "± 12678.747564512823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3887773.3333333335,
            "unit": "ns",
            "range": "± 67604.62227082519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3662533.3333333335,
            "unit": "ns",
            "range": "± 30379.966770100014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19079.787234042553,
            "unit": "ns",
            "range": "± 2073.311194462276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87570.83333333333,
            "unit": "ns",
            "range": "± 6929.675570239341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69196.15384615384,
            "unit": "ns",
            "range": "± 3565.3980054214057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85596.59090909091,
            "unit": "ns",
            "range": "± 8140.24271523306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4643.75,
            "unit": "ns",
            "range": "± 852.2184671722819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17850.526315789473,
            "unit": "ns",
            "range": "± 1798.9875216419698"
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
          "id": "dd2dd8e2c96e2e138e02145f064c42db10de69fd",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:35:07+09:00",
          "tree_id": "a0b8703e7053ddce8bead0bb2429b612ff6c1096",
          "url": "https://github.com/OnedgeLee/libplanet/commit/dd2dd8e2c96e2e138e02145f064c42db10de69fd"
        },
        "date": 1689641629268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406946,
            "unit": "ns",
            "range": "± 194779.76499761277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800982,
            "unit": "ns",
            "range": "± 186567.60270689544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702274.7474747475,
            "unit": "ns",
            "range": "± 126324.40207610151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5135655.882352941,
            "unit": "ns",
            "range": "± 245696.592643291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54850,
            "unit": "ns",
            "range": "± 7187.836948623695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7160873.333333333,
            "unit": "ns",
            "range": "± 79935.72834888456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19184080,
            "unit": "ns",
            "range": "± 225893.1264368807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52678946.15384615,
            "unit": "ns",
            "range": "± 1404721.7945858939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106481313.33333333,
            "unit": "ns",
            "range": "± 1987165.714157682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211951353.33333334,
            "unit": "ns",
            "range": "± 3569373.1542240353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5009131.088362069,
            "unit": "ns",
            "range": "± 143021.99153021773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1616222.0638020833,
            "unit": "ns",
            "range": "± 25840.175935165138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1230167.564174107,
            "unit": "ns",
            "range": "± 14495.399094946739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2750431.1588541665,
            "unit": "ns",
            "range": "± 15026.95942244141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853339.9204799107,
            "unit": "ns",
            "range": "± 11601.799444573004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797590.76171875,
            "unit": "ns",
            "range": "± 8166.784478684422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3208621,
            "unit": "ns",
            "range": "± 263301.199149828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3548851.515151515,
            "unit": "ns",
            "range": "± 165612.1095929366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4308464.179104477,
            "unit": "ns",
            "range": "± 203707.8833224797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4011993.5483870967,
            "unit": "ns",
            "range": "± 177599.43312471168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6485168.831168831,
            "unit": "ns",
            "range": "± 331697.7759075826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295580.8510638298,
            "unit": "ns",
            "range": "± 18030.400114810545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239170.27027027027,
            "unit": "ns",
            "range": "± 8099.721012509041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262643,
            "unit": "ns",
            "range": "± 21677.895714904218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4389764.705882353,
            "unit": "ns",
            "range": "± 79974.74555427225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4025991.1764705884,
            "unit": "ns",
            "range": "± 78371.52750539836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28089.89898989899,
            "unit": "ns",
            "range": "± 4490.045564731645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104750,
            "unit": "ns",
            "range": "± 14041.94930222245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99766,
            "unit": "ns",
            "range": "± 18609.45898290339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107603.1914893617,
            "unit": "ns",
            "range": "± 17063.49591762132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5663,
            "unit": "ns",
            "range": "± 1934.4121859238028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24138,
            "unit": "ns",
            "range": "± 4486.292928735733"
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
          "id": "8ef11111b196a865999fcbb79a1c449d92c74daa",
          "message": "feat: Add Gossip.DeniedPeers property",
          "timestamp": "2023-07-18T09:31:07+09:00",
          "tree_id": "909aec0cf9c83ce9ea2d91206f536afb3dd729a6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8ef11111b196a865999fcbb79a1c449d92c74daa"
        },
        "date": 1689641835851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662980.2083333333,
            "unit": "ns",
            "range": "± 151181.41184807473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3080350.7462686566,
            "unit": "ns",
            "range": "± 146313.4983863099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2096243.3333333333,
            "unit": "ns",
            "range": "± 140838.46915263752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5841991.304347826,
            "unit": "ns",
            "range": "± 329193.7031737834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56201.13636363636,
            "unit": "ns",
            "range": "± 5241.029431174052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9810872.727272727,
            "unit": "ns",
            "range": "± 305584.82790455176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24667353.333333332,
            "unit": "ns",
            "range": "± 280577.4628630508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61440800,
            "unit": "ns",
            "range": "± 1311617.6992130324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122087102.5,
            "unit": "ns",
            "range": "± 4293256.58448805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248371688,
            "unit": "ns",
            "range": "± 6197015.044782985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5941795.911458333,
            "unit": "ns",
            "range": "± 56299.66241190217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887393.0729166667,
            "unit": "ns",
            "range": "± 23728.17080059496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1438723.7109375,
            "unit": "ns",
            "range": "± 14560.837830043089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3224510.3665865385,
            "unit": "ns",
            "range": "± 19726.749278854422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1017463.6493389423,
            "unit": "ns",
            "range": "± 14776.678917586338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954442.1316964285,
            "unit": "ns",
            "range": "± 9514.138884023974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3991010.8695652173,
            "unit": "ns",
            "range": "± 148731.71294240715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4016424.5614035088,
            "unit": "ns",
            "range": "± 172088.5167588199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4958122.413793104,
            "unit": "ns",
            "range": "± 142712.84579420244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4547311.111111111,
            "unit": "ns",
            "range": "± 168000.6929398889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7754090.740740741,
            "unit": "ns",
            "range": "± 324437.96527051966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322041.17647058825,
            "unit": "ns",
            "range": "± 15277.290094290602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304801.88679245283,
            "unit": "ns",
            "range": "± 10817.906995170939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287112.5,
            "unit": "ns",
            "range": "± 17268.76248880437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4939876.19047619,
            "unit": "ns",
            "range": "± 116577.85769502675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4574828.571428572,
            "unit": "ns",
            "range": "± 72133.50260317461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26128.282828282827,
            "unit": "ns",
            "range": "± 4324.0438462737675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106768.36734693877,
            "unit": "ns",
            "range": "± 8072.769513385253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95013.68421052632,
            "unit": "ns",
            "range": "± 7959.774006819644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115109.5744680851,
            "unit": "ns",
            "range": "± 14777.651821766629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7351.648351648351,
            "unit": "ns",
            "range": "± 1083.0371530882378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25717.391304347828,
            "unit": "ns",
            "range": "± 2253.866455459248"
          }
        ]
      }
    ]
  }
}