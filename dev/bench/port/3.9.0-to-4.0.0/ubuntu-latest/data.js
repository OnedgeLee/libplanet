window.BENCHMARK_DATA = {
  "lastUpdate": 1702025060250,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c440d85a5ce59c88ba6d826ce8d5b8de04a66844",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:33:28+09:00",
          "tree_id": "89f49ba453970fb5696b15c4ec9a17c3c6119325",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c440d85a5ce59c88ba6d826ce8d5b8de04a66844"
        },
        "date": 1702025049782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198923.21929824562,
            "unit": "ns",
            "range": "± 8617.041099626753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194947.91304347827,
            "unit": "ns",
            "range": "± 11105.706642817086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169420.51428571428,
            "unit": "ns",
            "range": "± 5544.879176381778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162978.066666667,
            "unit": "ns",
            "range": "± 35883.73557848551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747040.277777778,
            "unit": "ns",
            "range": "± 55528.32980063161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17344.77659574468,
            "unit": "ns",
            "range": "± 1382.9458207400116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60545.926315789475,
            "unit": "ns",
            "range": "± 3603.905152133822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59506.81460674157,
            "unit": "ns",
            "range": "± 5646.57187752708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62942.32653061225,
            "unit": "ns",
            "range": "± 12279.930442208313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2999.0416666666665,
            "unit": "ns",
            "range": "± 327.83609244372707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14770.268817204302,
            "unit": "ns",
            "range": "± 1403.694543910469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3775181.775,
            "unit": "ns",
            "range": "± 62353.320780861075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1237182.9772135417,
            "unit": "ns",
            "range": "± 17358.17929251765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768308.2731370192,
            "unit": "ns",
            "range": "± 2366.3820282484576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926665.8194110577,
            "unit": "ns",
            "range": "± 3863.4727663463386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612647.6171061198,
            "unit": "ns",
            "range": "± 957.6007161666079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556651.9725864956,
            "unit": "ns",
            "range": "± 4646.219932424419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40516.13829787234,
            "unit": "ns",
            "range": "± 5571.505836586698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397434.8387096776,
            "unit": "ns",
            "range": "± 71054.37292200801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525196.177777778,
            "unit": "ns",
            "range": "± 59483.12577349864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3089896,
            "unit": "ns",
            "range": "± 51371.606820165885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3141170.4583333335,
            "unit": "ns",
            "range": "± 114946.88207703708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9212659.464285715,
            "unit": "ns",
            "range": "± 223215.86808911336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5556500.866666666,
            "unit": "ns",
            "range": "± 28403.169063294597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14497689.2,
            "unit": "ns",
            "range": "± 91047.88662346863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36979688.13333333,
            "unit": "ns",
            "range": "± 299682.3105988041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74685098.35714285,
            "unit": "ns",
            "range": "± 371162.27576577856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148752113.2857143,
            "unit": "ns",
            "range": "± 1313896.4964880038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991457.5483870967,
            "unit": "ns",
            "range": "± 79541.78037106145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1994566.375,
            "unit": "ns",
            "range": "± 114956.24767071853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732665.5913978494,
            "unit": "ns",
            "range": "± 127964.62707150215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7966871.62962963,
            "unit": "ns",
            "range": "± 219087.91679284093"
          }
        ]
      }
    ]
  }
}