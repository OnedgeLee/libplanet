window.BENCHMARK_DATA = {
  "lastUpdate": 1678519242367,
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
          "id": "6ca115644a09dae06fb5003352db39f25305bbf8",
          "message": "fix: ActionExecutionState total count",
          "timestamp": "2023-03-11T16:02:59+09:00",
          "tree_id": "a307135d2d9e360060cf6e08395ba431cb14e229",
          "url": "https://github.com/OnedgeLee/libplanet/commit/6ca115644a09dae06fb5003352db39f25305bbf8"
        },
        "date": 1678519198522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7833417.538461538,
            "unit": "ns",
            "range": "± 57225.44714055013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19020958.846153848,
            "unit": "ns",
            "range": "± 302940.25864649896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47521681.5,
            "unit": "ns",
            "range": "± 1218812.7566129405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93059119.78571428,
            "unit": "ns",
            "range": "± 1034355.2278370684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 190291544.66666666,
            "unit": "ns",
            "range": "± 1256094.8175789143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58439.76315789474,
            "unit": "ns",
            "range": "± 6338.942037392001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200332.0224719101,
            "unit": "ns",
            "range": "± 11744.101899732794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195602.93258426967,
            "unit": "ns",
            "range": "± 13747.230907778014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168285.1888888889,
            "unit": "ns",
            "range": "± 10242.873091382482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11603683.277777778,
            "unit": "ns",
            "range": "± 203567.84204745962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9362387.4,
            "unit": "ns",
            "range": "± 196544.0959835463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20018.380434782608,
            "unit": "ns",
            "range": "± 2874.1269055251446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54851.32258064516,
            "unit": "ns",
            "range": "± 6763.1118611911625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62253.70526315789,
            "unit": "ns",
            "range": "± 7304.163777372063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124597.39784946236,
            "unit": "ns",
            "range": "± 18168.40139897683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7387.734042553191,
            "unit": "ns",
            "range": "± 993.9793725335511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22658.08947368421,
            "unit": "ns",
            "range": "± 3505.3749867539645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1530133.1595744682,
            "unit": "ns",
            "range": "± 176019.89126270803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2798771.265625,
            "unit": "ns",
            "range": "± 126073.41406576632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2416254.4736842103,
            "unit": "ns",
            "range": "± 192795.34223923972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5955381.231707317,
            "unit": "ns",
            "range": "± 208505.65866290347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3180450.098360656,
            "unit": "ns",
            "range": "± 118477.76352600304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4987354.758064516,
            "unit": "ns",
            "range": "± 226857.07246212993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23317675.23529412,
            "unit": "ns",
            "range": "± 738608.5897229663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6120593.4718309855,
            "unit": "ns",
            "range": "± 299619.2506693869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26992794.162162162,
            "unit": "ns",
            "range": "± 895032.4069210663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6459916.970805921,
            "unit": "ns",
            "range": "± 216984.63559618455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923941.39375,
            "unit": "ns",
            "range": "± 7497.776655166991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1278177.3434895833,
            "unit": "ns",
            "range": "± 15981.990023767667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2445538.562760417,
            "unit": "ns",
            "range": "± 25168.617458537123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 770544.9040178572,
            "unit": "ns",
            "range": "± 5631.710975236437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 689129.648061899,
            "unit": "ns",
            "range": "± 2942.3117189127233"
          }
        ]
      }
    ]
  }
}