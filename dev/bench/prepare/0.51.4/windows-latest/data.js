window.BENCHMARK_DATA = {
  "lastUpdate": 1679047380528,
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
          "id": "394e00f8b948b886a898d4a09da8f4f768be018a",
          "message": "prepare: 0.51.4",
          "timestamp": "2023-03-17T18:47:08+09:00",
          "tree_id": "04b511c8d3d9638abf78f6ec1d85b047e8def794",
          "url": "https://github.com/OnedgeLee/libplanet/commit/394e00f8b948b886a898d4a09da8f4f768be018a"
        },
        "date": 1679047345567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1273370,
            "unit": "ns",
            "range": "± 69670.68354815687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2352350,
            "unit": "ns",
            "range": "± 89749.51500952216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2054228.0487804879,
            "unit": "ns",
            "range": "± 108105.0760841418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4718156.41025641,
            "unit": "ns",
            "range": "± 162242.09460081207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42592.42424242424,
            "unit": "ns",
            "range": "± 2007.2415519858712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6849113.333333333,
            "unit": "ns",
            "range": "± 39720.43135046077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17291280,
            "unit": "ns",
            "range": "± 75544.05715493821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44047735.71428572,
            "unit": "ns",
            "range": "± 156033.4757334161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 88959228.57142857,
            "unit": "ns",
            "range": "± 622731.3180702368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 180604750,
            "unit": "ns",
            "range": "± 1188902.1547047254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4792669.791666667,
            "unit": "ns",
            "range": "± 34611.81621567627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520614.4791666667,
            "unit": "ns",
            "range": "± 9013.009618221997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147836.3346354167,
            "unit": "ns",
            "range": "± 2642.819532335446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570862.918526786,
            "unit": "ns",
            "range": "± 13532.389175322089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830408.837890625,
            "unit": "ns",
            "range": "± 2857.2128973474396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727057.5404575893,
            "unit": "ns",
            "range": "± 884.9928619104951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2969976.470588235,
            "unit": "ns",
            "range": "± 59549.827134633284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4459763.157894737,
            "unit": "ns",
            "range": "± 51094.35944653247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20632537.5,
            "unit": "ns",
            "range": "± 360162.08550225454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5497405.555555556,
            "unit": "ns",
            "range": "± 141646.24498358127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24290786.666666668,
            "unit": "ns",
            "range": "± 271382.52356266073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171598.38709677418,
            "unit": "ns",
            "range": "± 7767.386461214837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171210.52631578947,
            "unit": "ns",
            "range": "± 5822.639388218603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147015,
            "unit": "ns",
            "range": "± 3365.0330412079247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10276000,
            "unit": "ns",
            "range": "± 68374.63644576773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8246328.571428572,
            "unit": "ns",
            "range": "± 111395.42476843769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16537.23404255319,
            "unit": "ns",
            "range": "± 1424.2888466981135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47420.43010752688,
            "unit": "ns",
            "range": "± 3714.032120971145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33942.42424242424,
            "unit": "ns",
            "range": "± 1088.0114610581727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80462.1052631579,
            "unit": "ns",
            "range": "± 11962.451706897946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3994.8979591836733,
            "unit": "ns",
            "range": "± 659.1735608280729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14903.061224489797,
            "unit": "ns",
            "range": "± 1572.603992046487"
          }
        ]
      }
    ]
  }
}