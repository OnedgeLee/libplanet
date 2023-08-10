window.BENCHMARK_DATA = {
  "lastUpdate": 1691653153352,
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
          "id": "c511e899b206f325491b87d5f877fe693538a619",
          "message": "fix: Fix MakeTxExecutions",
          "timestamp": "2023-08-10T16:11:06+09:00",
          "tree_id": "a4b66505ff9314fdeb9d05ac5a23656b123e4793",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c511e899b206f325491b87d5f877fe693538a619"
        },
        "date": 1691653108624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514045.8333333333,
            "unit": "ns",
            "range": "± 187688.7114439991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2964258.947368421,
            "unit": "ns",
            "range": "± 322316.636803908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217307.6923076925,
            "unit": "ns",
            "range": "± 266660.55085935636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6399977.083333333,
            "unit": "ns",
            "range": "± 653310.1472669239"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61598.969072164946,
            "unit": "ns",
            "range": "± 12642.936885580955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7439861.855670103,
            "unit": "ns",
            "range": "± 589346.0819069052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20837751.54639175,
            "unit": "ns",
            "range": "± 1740658.085569064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52804177.551020406,
            "unit": "ns",
            "range": "± 3568935.0954265245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111600031,
            "unit": "ns",
            "range": "± 9092861.488543492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216232804,
            "unit": "ns",
            "range": "± 14262211.524298124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5308723.7882653065,
            "unit": "ns",
            "range": "± 210741.52849022194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1716198.6875,
            "unit": "ns",
            "range": "± 104854.6698400205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1270899.886924342,
            "unit": "ns",
            "range": "± 42845.04410253473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2561219.9678308824,
            "unit": "ns",
            "range": "± 81794.81237505536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861628.33984375,
            "unit": "ns",
            "range": "± 19716.274143068484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788617.9090711805,
            "unit": "ns",
            "range": "± 15243.488324191901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344486.4583333335,
            "unit": "ns",
            "range": "± 402301.5427367601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3445672,
            "unit": "ns",
            "range": "± 450607.1784926322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4451196.875,
            "unit": "ns",
            "range": "± 487930.65392816137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3953723.711340206,
            "unit": "ns",
            "range": "± 408630.27624135057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7297202.040816327,
            "unit": "ns",
            "range": "± 645471.2174629569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298048.3870967742,
            "unit": "ns",
            "range": "± 38183.762235500355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268948.8505747126,
            "unit": "ns",
            "range": "± 24838.77545502836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251923.68421052632,
            "unit": "ns",
            "range": "± 39429.65783687779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241683,
            "unit": "ns",
            "range": "± 463801.0125075519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3747113.2653061226,
            "unit": "ns",
            "range": "± 436048.062383971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31213.26530612245,
            "unit": "ns",
            "range": "± 9066.269624159604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98355.05617977527,
            "unit": "ns",
            "range": "± 11788.949093767618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101378.72340425532,
            "unit": "ns",
            "range": "± 15397.301972430072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124267.70833333333,
            "unit": "ns",
            "range": "± 19118.745250568627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5845,
            "unit": "ns",
            "range": "± 1219.1405979083604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31651,
            "unit": "ns",
            "range": "± 8767.311820943554"
          }
        ]
      }
    ]
  }
}