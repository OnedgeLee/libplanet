window.BENCHMARK_DATA = {
  "lastUpdate": 1691657185419,
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
          "id": "58342035f516267808c027e47fa95880240e0206",
          "message": "feat: Remove NullChainStates\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-08-10T17:11:49+09:00",
          "tree_id": "b3df59f6b71ffb5fada57ce7b52a255cd5ea73a7",
          "url": "https://github.com/OnedgeLee/libplanet/commit/58342035f516267808c027e47fa95880240e0206"
        },
        "date": 1691657150115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1432280.612244898,
            "unit": "ns",
            "range": "± 117189.88350321705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643308,
            "unit": "ns",
            "range": "± 103771.88648420051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1877113.4020618557,
            "unit": "ns",
            "range": "± 142334.86310814274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4833093.87755102,
            "unit": "ns",
            "range": "± 192150.69759627388"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47087.91208791209,
            "unit": "ns",
            "range": "± 2745.494700002378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7461588.888888889,
            "unit": "ns",
            "range": "± 154656.26359537157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20946546.666666668,
            "unit": "ns",
            "range": "± 283183.53177165275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52586293.333333336,
            "unit": "ns",
            "range": "± 585245.3898844076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105584928.57142857,
            "unit": "ns",
            "range": "± 990855.8409690169"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213421907.14285713,
            "unit": "ns",
            "range": "± 2389823.821142241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4518589.663461538,
            "unit": "ns",
            "range": "± 15433.01077131332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1444595.4817708333,
            "unit": "ns",
            "range": "± 3683.378263699634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091614.6354166667,
            "unit": "ns",
            "range": "± 7868.313802436173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614686.1177884615,
            "unit": "ns",
            "range": "± 16322.006436855127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840633.7369791666,
            "unit": "ns",
            "range": "± 4792.5238022967815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772540.0948660715,
            "unit": "ns",
            "range": "± 1678.5599276345108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433620,
            "unit": "ns",
            "range": "± 75927.82306763098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577292.3076923075,
            "unit": "ns",
            "range": "± 124487.01133814255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4408556,
            "unit": "ns",
            "range": "± 117607.21732388138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3986250,
            "unit": "ns",
            "range": "± 86575.09906305495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6256863.414634147,
            "unit": "ns",
            "range": "± 185919.69739123606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258775.75757575757,
            "unit": "ns",
            "range": "± 7952.870169906833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252357.6923076923,
            "unit": "ns",
            "range": "± 6696.277955815339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225409.5890410959,
            "unit": "ns",
            "range": "± 11234.942569990704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4144350,
            "unit": "ns",
            "range": "± 43698.7898089779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794796.6666666665,
            "unit": "ns",
            "range": "± 60468.83337326602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22126.041666666668,
            "unit": "ns",
            "range": "± 1760.1581742120834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90706.25,
            "unit": "ns",
            "range": "± 6545.964003631711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76008.33333333333,
            "unit": "ns",
            "range": "± 4622.978458154591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89484.69387755102,
            "unit": "ns",
            "range": "± 16399.436450216952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5594.791666666667,
            "unit": "ns",
            "range": "± 869.043005618269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22017.34693877551,
            "unit": "ns",
            "range": "± 2267.430786868246"
          }
        ]
      }
    ]
  }
}