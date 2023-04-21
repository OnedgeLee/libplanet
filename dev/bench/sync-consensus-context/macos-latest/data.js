window.BENCHMARK_DATA = {
  "lastUpdate": 1682052559989,
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
          "id": "d6d87834a170b07dd60f9311efe37295800a4c4e",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-20T11:15:04+09:00",
          "tree_id": "aa4baf5796af7f658859b22d9da95ce319e15ac9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d6d87834a170b07dd60f9311efe37295800a4c4e"
        },
        "date": 1681957816980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8169282.766666667,
            "unit": "ns",
            "range": "± 149319.413462008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19909694.61764706,
            "unit": "ns",
            "range": "± 404132.1764971954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48816062.5,
            "unit": "ns",
            "range": "± 1313758.5131151082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99451133.05263157,
            "unit": "ns",
            "range": "± 2140525.9705664106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197811992.0652174,
            "unit": "ns",
            "range": "± 9533211.355107708"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57615.30434782609,
            "unit": "ns",
            "range": "± 6156.122567914782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388059.887755102,
            "unit": "ns",
            "range": "± 31769.468330095828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307959.9791666667,
            "unit": "ns",
            "range": "± 21822.329650819484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309281.6875,
            "unit": "ns",
            "range": "± 24631.942759592515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5619617.625,
            "unit": "ns",
            "range": "± 86142.37673439246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3857958.8666666667,
            "unit": "ns",
            "range": "± 71447.53456894754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24516.77659574468,
            "unit": "ns",
            "range": "± 3438.1751728855165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108200.81720430107,
            "unit": "ns",
            "range": "± 18714.833795069946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113346.42783505155,
            "unit": "ns",
            "range": "± 14433.761886377875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118736.58762886598,
            "unit": "ns",
            "range": "± 17670.447592515742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6475.516483516483,
            "unit": "ns",
            "range": "± 1820.6864600574108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17171.123595505618,
            "unit": "ns",
            "range": "± 2833.3282541763842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1553649.112244898,
            "unit": "ns",
            "range": "± 175216.69982522185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989267.304347826,
            "unit": "ns",
            "range": "± 206965.68766331853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2406121.09375,
            "unit": "ns",
            "range": "± 149971.65046326365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6607701.689189189,
            "unit": "ns",
            "range": "± 329248.04738363496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3732674.7721518986,
            "unit": "ns",
            "range": "± 192723.93370762825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3325310,
            "unit": "ns",
            "range": "± 105256.77235311332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4505717.821428572,
            "unit": "ns",
            "range": "± 190411.82494115765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4470955.286516854,
            "unit": "ns",
            "range": "± 245996.01799786554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8442431.37735849,
            "unit": "ns",
            "range": "± 233886.07490517086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6361346.64453125,
            "unit": "ns",
            "range": "± 120021.29186368837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863559.24453125,
            "unit": "ns",
            "range": "± 8259.236368714315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299696.2160993305,
            "unit": "ns",
            "range": "± 15433.358829028684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2524390.927619485,
            "unit": "ns",
            "range": "± 51071.1237222083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 779833.8904622396,
            "unit": "ns",
            "range": "± 15872.01052819357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719920.6859375,
            "unit": "ns",
            "range": "± 8285.839651601453"
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
          "id": "d32015105825cd975599ec4c4e717f0c67127419",
          "message": "Move delay to EndCommit from OnTipChanged",
          "timestamp": "2023-04-21T12:49:25+09:00",
          "tree_id": "d423617f2223528602beb3570fe557cbdc632a1d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/d32015105825cd975599ec4c4e717f0c67127419"
        },
        "date": 1682050144434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8313574.944444444,
            "unit": "ns",
            "range": "± 322021.61414868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19889952.863636363,
            "unit": "ns",
            "range": "± 477702.9003467976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50799714.384615384,
            "unit": "ns",
            "range": "± 836409.0524013493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98697473.86666666,
            "unit": "ns",
            "range": "± 1217403.9388327738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207488542.73333332,
            "unit": "ns",
            "range": "± 2280581.139544213"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60399.90217391304,
            "unit": "ns",
            "range": "± 7163.813138450262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391054.87096774194,
            "unit": "ns",
            "range": "± 28516.049390698125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336746.65789473685,
            "unit": "ns",
            "range": "± 35536.04408721406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333507.9569892473,
            "unit": "ns",
            "range": "± 40890.91838445569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5677998.608695652,
            "unit": "ns",
            "range": "± 217935.77872088103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4074590.0412371135,
            "unit": "ns",
            "range": "± 272259.5909138203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25558.620689655174,
            "unit": "ns",
            "range": "± 3094.611382753032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128596.82417582418,
            "unit": "ns",
            "range": "± 20565.279382489643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134989.8947368421,
            "unit": "ns",
            "range": "± 17138.70898553708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 166336.6326530612,
            "unit": "ns",
            "range": "± 35751.47524095897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9031.739583333334,
            "unit": "ns",
            "range": "± 1728.380037064167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27110.415730337078,
            "unit": "ns",
            "range": "± 3777.5894665086375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675880.6313131314,
            "unit": "ns",
            "range": "± 188758.63131521372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3078776.184782609,
            "unit": "ns",
            "range": "± 177879.20650291967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2646456.6649484537,
            "unit": "ns",
            "range": "± 258212.87473422807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6970282.905405405,
            "unit": "ns",
            "range": "± 347063.5490298716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3641951.619047619,
            "unit": "ns",
            "range": "± 167079.42507830728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3450421.163265306,
            "unit": "ns",
            "range": "± 229643.24883578555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4517202.779069767,
            "unit": "ns",
            "range": "± 164738.11907985318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4468436.828947368,
            "unit": "ns",
            "range": "± 224072.10771055453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8480984.227272727,
            "unit": "ns",
            "range": "± 395426.5595674468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7680399.271306818,
            "unit": "ns",
            "range": "± 237841.0696333354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2305970.9080228363,
            "unit": "ns",
            "range": "± 106927.725177858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1517914.0033255913,
            "unit": "ns",
            "range": "± 51387.56409632974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2734340.228812302,
            "unit": "ns",
            "range": "± 142137.22492314156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903375.7141532513,
            "unit": "ns",
            "range": "± 53209.823653671156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803541.4584365473,
            "unit": "ns",
            "range": "± 28507.9640714029"
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
          "id": "4b9110e1deed3f401fdb6a961798f4bb984d8103",
          "message": "doc: update changelog",
          "timestamp": "2023-04-21T13:27:24+09:00",
          "tree_id": "b995b8dde84b1e31c1acde9d2eb4eb1410ea9f0e",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4b9110e1deed3f401fdb6a961798f4bb984d8103"
        },
        "date": 1682052168688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7914993.557692308,
            "unit": "ns",
            "range": "± 324760.43568859133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19680544.5,
            "unit": "ns",
            "range": "± 213326.34127795484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50021867.222222224,
            "unit": "ns",
            "range": "± 1023844.3653345322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97883897.46666667,
            "unit": "ns",
            "range": "± 1560673.8428334577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201421226.33333334,
            "unit": "ns",
            "range": "± 3411778.5464416333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61017.183673469386,
            "unit": "ns",
            "range": "± 8396.412066756984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365960.8793103448,
            "unit": "ns",
            "range": "± 15855.009126929035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310146.88764044945,
            "unit": "ns",
            "range": "± 17096.96692693965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284891.33684210526,
            "unit": "ns",
            "range": "± 21265.11628586328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5177111.94117647,
            "unit": "ns",
            "range": "± 89389.76146242266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3504436.3181818184,
            "unit": "ns",
            "range": "± 70682.24922151945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16661.521739130436,
            "unit": "ns",
            "range": "± 1944.1720319025544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83096.95652173914,
            "unit": "ns",
            "range": "± 6164.684029607847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79014.79069767441,
            "unit": "ns",
            "range": "± 6213.012511924004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106723.92631578947,
            "unit": "ns",
            "range": "± 11269.012977830527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5250.865168539326,
            "unit": "ns",
            "range": "± 818.718818851237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15916.154761904761,
            "unit": "ns",
            "range": "± 1436.5178739807618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575915.383838384,
            "unit": "ns",
            "range": "± 186103.75267815526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3017766.1785714286,
            "unit": "ns",
            "range": "± 128143.93774886781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2509599.110526316,
            "unit": "ns",
            "range": "± 200499.40237647947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6677299.304878049,
            "unit": "ns",
            "range": "± 350821.05620680784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3859315.2285714285,
            "unit": "ns",
            "range": "± 124105.43470634999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347900.705263158,
            "unit": "ns",
            "range": "± 203234.03119121402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4399075.071428572,
            "unit": "ns",
            "range": "± 161749.14371308638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4419099.484848484,
            "unit": "ns",
            "range": "± 335735.3774686967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8317654.178571428,
            "unit": "ns",
            "range": "± 330064.2816272506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6031042.299278846,
            "unit": "ns",
            "range": "± 36891.333118014285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926027.7626953125,
            "unit": "ns",
            "range": "± 15657.331555425937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1229221.086216518,
            "unit": "ns",
            "range": "± 8076.926326665145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2389625.5596354166,
            "unit": "ns",
            "range": "± 17829.460217477168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813289.7848307291,
            "unit": "ns",
            "range": "± 13706.076671848392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766060.9955078125,
            "unit": "ns",
            "range": "± 3835.7463426375807"
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
          "id": "3e57e4372fbba82358418691b4a5da0770f3f542",
          "message": "doc: update changelog",
          "timestamp": "2023-04-21T13:33:12+09:00",
          "tree_id": "d3771ead3aa18d58ac72c7b3f027e2785f150300",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3e57e4372fbba82358418691b4a5da0770f3f542"
        },
        "date": 1682052504080,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7729621.142857143,
            "unit": "ns",
            "range": "± 66438.21127658291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18494861.846153848,
            "unit": "ns",
            "range": "± 298727.248692082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47081521.82608695,
            "unit": "ns",
            "range": "± 1183999.4311952968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93698683.44117647,
            "unit": "ns",
            "range": "± 1862732.5643084298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192758044.3888889,
            "unit": "ns",
            "range": "± 3855902.320014941"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58226.604395604394,
            "unit": "ns",
            "range": "± 8610.84696425144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 360999.94805194804,
            "unit": "ns",
            "range": "± 18317.987491373282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296311.6111111111,
            "unit": "ns",
            "range": "± 20882.905395225604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286456.1914893617,
            "unit": "ns",
            "range": "± 20749.144617309757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5561313.75,
            "unit": "ns",
            "range": "± 94420.5023459771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3563124.934782609,
            "unit": "ns",
            "range": "± 87153.32970107447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16812.8488372093,
            "unit": "ns",
            "range": "± 1267.0975775364077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86361.94444444444,
            "unit": "ns",
            "range": "± 7953.8871528062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81799.58988764045,
            "unit": "ns",
            "range": "± 6262.98406519762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107049.58695652174,
            "unit": "ns",
            "range": "± 13511.19456139508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5299.954022988506,
            "unit": "ns",
            "range": "± 487.09833561531366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16187.360759493671,
            "unit": "ns",
            "range": "± 1493.9265911853558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588694.7368421052,
            "unit": "ns",
            "range": "± 144776.594500984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3018901.426229508,
            "unit": "ns",
            "range": "± 136254.42778841587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2709611.1818181816,
            "unit": "ns",
            "range": "± 294237.42861666356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6828028.9,
            "unit": "ns",
            "range": "± 270471.90628559794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325324.9295774647,
            "unit": "ns",
            "range": "± 162187.39814779724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3249596.95,
            "unit": "ns",
            "range": "± 114906.4334558161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4278873.3877551025,
            "unit": "ns",
            "range": "± 155586.5832158545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4215080.930555556,
            "unit": "ns",
            "range": "± 207533.3818924402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8269693.755555555,
            "unit": "ns",
            "range": "± 463826.2036148028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6047397.449776785,
            "unit": "ns",
            "range": "± 32161.200286584382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927472.6555989583,
            "unit": "ns",
            "range": "± 13256.017089142055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1226661.5630208333,
            "unit": "ns",
            "range": "± 7792.351808029333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2409117.921614583,
            "unit": "ns",
            "range": "± 19219.552497862955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 761525.878515625,
            "unit": "ns",
            "range": "± 2353.270190024317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 695690.7016276042,
            "unit": "ns",
            "range": "± 6304.8606928134195"
          }
        ]
      }
    ]
  }
}