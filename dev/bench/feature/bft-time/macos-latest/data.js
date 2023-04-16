window.BENCHMARK_DATA = {
  "lastUpdate": 1681635905369,
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
          "id": "da6ff26ce0559ec68832db40f698016be24c6e7f",
          "message": "feature: use bft time as block timestamp",
          "timestamp": "2023-04-16T17:37:15+09:00",
          "tree_id": "4ee86cb37cfb63efcf2c2049367b295996ac0623",
          "url": "https://github.com/OnedgeLee/libplanet/commit/da6ff26ce0559ec68832db40f698016be24c6e7f"
        },
        "date": 1681635862526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13067006.074468086,
            "unit": "ns",
            "range": "± 4655631.796430751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26062661.436170213,
            "unit": "ns",
            "range": "± 4478975.062299913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59156034.97752809,
            "unit": "ns",
            "range": "± 7640958.2501906045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127584067.18947369,
            "unit": "ns",
            "range": "± 27249243.101052657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237317984.71578947,
            "unit": "ns",
            "range": "± 28771709.72070988"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80488.90659340659,
            "unit": "ns",
            "range": "± 8928.935230757763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 435786.04736842104,
            "unit": "ns",
            "range": "± 58806.291818494065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361226.152173913,
            "unit": "ns",
            "range": "± 35657.781888185076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 363963,
            "unit": "ns",
            "range": "± 48810.33656631955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6070935.989361702,
            "unit": "ns",
            "range": "± 533047.1453982675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4618703.716494845,
            "unit": "ns",
            "range": "± 442976.6582161861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29162.80769230769,
            "unit": "ns",
            "range": "± 5270.044795703158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130067.24731182796,
            "unit": "ns",
            "range": "± 19949.970849742193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 155710.0652173913,
            "unit": "ns",
            "range": "± 24910.70813102483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 311004.2419354839,
            "unit": "ns",
            "range": "± 40013.40205369871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11254.75,
            "unit": "ns",
            "range": "± 2046.2558121850502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26183.521276595744,
            "unit": "ns",
            "range": "± 5520.013614169599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2242772.065217391,
            "unit": "ns",
            "range": "± 357845.3654508077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3938895.1,
            "unit": "ns",
            "range": "± 428953.77173951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3703490,
            "unit": "ns",
            "range": "± 727280.2670024593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9602110.977272727,
            "unit": "ns",
            "range": "± 2577069.852030692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4732645.142857143,
            "unit": "ns",
            "range": "± 1371949.738443509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4852992.733333333,
            "unit": "ns",
            "range": "± 982754.7181375148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5646513.649425288,
            "unit": "ns",
            "range": "± 594934.9772693851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5617753.438202247,
            "unit": "ns",
            "range": "± 672847.4330092148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9584507.846938776,
            "unit": "ns",
            "range": "± 774182.3310210074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8223217.593427835,
            "unit": "ns",
            "range": "± 533493.8690368636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2371611.2213273197,
            "unit": "ns",
            "range": "± 137016.3410967919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1512472.8094740317,
            "unit": "ns",
            "range": "± 69553.53918814723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3613641.7890625,
            "unit": "ns",
            "range": "± 361608.0246839864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992149.1477776605,
            "unit": "ns",
            "range": "± 49405.76465439836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752942.6073196766,
            "unit": "ns",
            "range": "± 40675.36860185442"
          }
        ]
      }
    ]
  }
}