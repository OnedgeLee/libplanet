window.BENCHMARK_DATA = {
  "lastUpdate": 1689147709571,
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
          "id": "349386cad10fdedaa0eab83fd5ee11f94d542bc2",
          "message": "Prepare 2.6.0",
          "timestamp": "2023-07-12T16:25:54+09:00",
          "tree_id": "c9cab82e8cbc048cd23f270c87bad81873f04f3b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/349386cad10fdedaa0eab83fd5ee11f94d542bc2"
        },
        "date": 1689147685612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8144712.32,
            "unit": "ns",
            "range": "± 213950.8914557887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20182698,
            "unit": "ns",
            "range": "± 591648.1962803367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50131053.71428572,
            "unit": "ns",
            "range": "± 757365.4153192885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99103207,
            "unit": "ns",
            "range": "± 1080408.7636126431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233073462.43333334,
            "unit": "ns",
            "range": "± 1851444.8320963692"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58410.586956521736,
            "unit": "ns",
            "range": "± 6951.321624915281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321058.652173913,
            "unit": "ns",
            "range": "± 18863.24963231082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305156.98924731184,
            "unit": "ns",
            "range": "± 20446.779183217943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294086.7448979592,
            "unit": "ns",
            "range": "± 21432.675655619718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4228197.333333333,
            "unit": "ns",
            "range": "± 117994.16805666547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3701428.296296296,
            "unit": "ns",
            "range": "± 99180.67451948288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18142.9,
            "unit": "ns",
            "range": "± 2401.4772890166837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87805.27083333333,
            "unit": "ns",
            "range": "± 8013.30161468932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96719.07,
            "unit": "ns",
            "range": "± 14687.192613765179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99054.31578947368,
            "unit": "ns",
            "range": "± 13732.145447091185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7012.292929292929,
            "unit": "ns",
            "range": "± 1404.4455965700506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17340.956043956045,
            "unit": "ns",
            "range": "± 2000.8825603389669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512684.4795918367,
            "unit": "ns",
            "range": "± 170308.7718512134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2808026.835164835,
            "unit": "ns",
            "range": "± 198771.3162670031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2034257.6210526316,
            "unit": "ns",
            "range": "± 213916.94453028735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5794379.984848484,
            "unit": "ns",
            "range": "± 259640.2121490128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3323528.4,
            "unit": "ns",
            "range": "± 147235.86431654711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3480626.977272727,
            "unit": "ns",
            "range": "± 121109.54570130387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4422431.138297873,
            "unit": "ns",
            "range": "± 169399.12808363792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3831776.724719101,
            "unit": "ns",
            "range": "± 212311.9956079192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7432766.149253732,
            "unit": "ns",
            "range": "± 330433.2171258345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5906499.061383928,
            "unit": "ns",
            "range": "± 40757.687147969526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1827449.0698242188,
            "unit": "ns",
            "range": "± 24486.024698585366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1288775.0320870536,
            "unit": "ns",
            "range": "± 5817.304029989408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604234.387890625,
            "unit": "ns",
            "range": "± 17982.201326371724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871841.6061848958,
            "unit": "ns",
            "range": "± 3126.410208051651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725826.7615234375,
            "unit": "ns",
            "range": "± 5573.009728668605"
          }
        ]
      }
    ]
  }
}