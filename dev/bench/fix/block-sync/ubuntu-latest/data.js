window.BENCHMARK_DATA = {
  "lastUpdate": 1688032912811,
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
          "id": "ba43002dca652c7895c36f90b26990593d2688f4",
          "message": "Fix BlockCompletion.Complete() to ignore empty chunk",
          "timestamp": "2023-06-29T18:47:15+09:00",
          "tree_id": "9ece02ac6488a9cbaa226825dc7af02b965b95d0",
          "url": "https://github.com/OnedgeLee/libplanet/commit/ba43002dca652c7895c36f90b26990593d2688f4"
        },
        "date": 1688032896393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8724836.666666666,
            "unit": "ns",
            "range": "± 156774.2081697053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23062382.933333334,
            "unit": "ns",
            "range": "± 210785.06636092832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58069487.666666664,
            "unit": "ns",
            "range": "± 474898.97582804266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116814374.07142857,
            "unit": "ns",
            "range": "± 594804.1269737412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234083169.26666668,
            "unit": "ns",
            "range": "± 666022.950172082"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49996.79347826087,
            "unit": "ns",
            "range": "± 4611.583846387778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302199.62790697673,
            "unit": "ns",
            "range": "± 10549.215542993516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288358.6511627907,
            "unit": "ns",
            "range": "± 9518.35474199522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259308.7142857143,
            "unit": "ns",
            "range": "± 5909.15109929385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4693129.666666667,
            "unit": "ns",
            "range": "± 48825.3167726783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4244981.333333333,
            "unit": "ns",
            "range": "± 39117.478929623314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23242.577319587628,
            "unit": "ns",
            "range": "± 2693.941477475629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105432.98979591837,
            "unit": "ns",
            "range": "± 7549.458331760469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90217.13978494624,
            "unit": "ns",
            "range": "± 7892.200732632237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104313.225,
            "unit": "ns",
            "range": "± 5936.700359957883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6275.855670103093,
            "unit": "ns",
            "range": "± 727.1144595489924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23535.886597938144,
            "unit": "ns",
            "range": "± 3195.133522497823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651514.8265306123,
            "unit": "ns",
            "range": "± 104766.53572528211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3062476.4444444445,
            "unit": "ns",
            "range": "± 63352.19557384057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2593502.2,
            "unit": "ns",
            "range": "± 137690.21576002723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6011641.545454546,
            "unit": "ns",
            "range": "± 224271.77935932527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6141140.4109375,
            "unit": "ns",
            "range": "± 28744.81000334205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1999364.6832932692,
            "unit": "ns",
            "range": "± 1947.3605745684017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409409.448046875,
            "unit": "ns",
            "range": "± 2316.492026633794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672760.745963542,
            "unit": "ns",
            "range": "± 2624.5822056838037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828915.4938616072,
            "unit": "ns",
            "range": "± 375.059879516835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778841.2462239583,
            "unit": "ns",
            "range": "± 404.04827077623037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3734820.722222222,
            "unit": "ns",
            "range": "± 68273.19254014846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3915552.3333333335,
            "unit": "ns",
            "range": "± 53057.61008115432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4800049.24137931,
            "unit": "ns",
            "range": "± 139335.48708798774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4956896.133333334,
            "unit": "ns",
            "range": "± 64113.09707391715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7443084.384615385,
            "unit": "ns",
            "range": "± 159276.50618822023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24cf88c45b17b4eadb23c9187d6762dc420e5fb6",
          "message": "Merge pull request #3255 from greymistcube/prepare/2.4.0\n\n🔧 Prepare 2.4.0",
          "timestamp": "2023-06-29T17:52:09+09:00",
          "tree_id": "b33de4fae50dfb9a6b3f468b31c6dada8ad809d6",
          "url": "https://github.com/OnedgeLee/libplanet/commit/24cf88c45b17b4eadb23c9187d6762dc420e5fb6"
        },
        "date": 1688032896780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10110567.8,
            "unit": "ns",
            "range": "± 177104.55473137894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26872954.533333335,
            "unit": "ns",
            "range": "± 342001.6274453481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68129494.2,
            "unit": "ns",
            "range": "± 223478.02700463802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137321718,
            "unit": "ns",
            "range": "± 649836.597514219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274618659.4,
            "unit": "ns",
            "range": "± 1096720.673423196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58451.84042553192,
            "unit": "ns",
            "range": "± 3604.1792984148833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344417.375,
            "unit": "ns",
            "range": "± 8706.253628394677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328137.48148148146,
            "unit": "ns",
            "range": "± 8947.017888962395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300023.86666666664,
            "unit": "ns",
            "range": "± 8912.040633742154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5427859.133333334,
            "unit": "ns",
            "range": "± 34404.93007210837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4957675.533333333,
            "unit": "ns",
            "range": "± 44313.43443966057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23067.28125,
            "unit": "ns",
            "range": "± 1536.482364658929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107375.57647058823,
            "unit": "ns",
            "range": "± 5770.860811782207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93477.05172413793,
            "unit": "ns",
            "range": "± 4122.764820991795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108558.07462686567,
            "unit": "ns",
            "range": "± 4117.728942737926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6174.364583333333,
            "unit": "ns",
            "range": "± 754.5563369820867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21850.88172043011,
            "unit": "ns",
            "range": "± 1644.518687676959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1827698.6813186812,
            "unit": "ns",
            "range": "± 101789.851287169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3453399.285714286,
            "unit": "ns",
            "range": "± 98414.77430671307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2867953.6785714286,
            "unit": "ns",
            "range": "± 123309.66618206038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6687502.352941177,
            "unit": "ns",
            "range": "± 129287.33015600426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7226337.577604166,
            "unit": "ns",
            "range": "± 22973.000862086403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2265760.98125,
            "unit": "ns",
            "range": "± 2745.593289697906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1663826.6861979167,
            "unit": "ns",
            "range": "± 4259.9143462246975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3120962.462760417,
            "unit": "ns",
            "range": "± 2278.8454724470957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1004730.1875,
            "unit": "ns",
            "range": "± 880.248280211698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 938993.6219401042,
            "unit": "ns",
            "range": "± 2765.841070305317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4235505.066666666,
            "unit": "ns",
            "range": "± 55644.324981421916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4435391.19047619,
            "unit": "ns",
            "range": "± 101221.26545228479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5354476.631578947,
            "unit": "ns",
            "range": "± 115276.71730338965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5597032.5,
            "unit": "ns",
            "range": "± 88042.31479652706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8533708.11764706,
            "unit": "ns",
            "range": "± 133880.0419460843"
          }
        ]
      }
    ]
  }
}