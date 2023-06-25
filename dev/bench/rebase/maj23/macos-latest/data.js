window.BENCHMARK_DATA = {
  "lastUpdate": 1687689148752,
  "repoUrl": "https://github.com/OnedgeLee/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c565a178831a711bdf786b79a9e2e6279fa1a65c",
          "message": "Fix maj23",
          "timestamp": "2023-06-25T19:16:18+09:00",
          "tree_id": "39a2af58c0af5ea78020da440b223735127e7419",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c565a178831a711bdf786b79a9e2e6279fa1a65c"
        },
        "date": 1687689113483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7618111.714285715,
            "unit": "ns",
            "range": "± 120836.12526025521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18984132.227272727,
            "unit": "ns",
            "range": "± 385832.95957064256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47047179.85714286,
            "unit": "ns",
            "range": "± 978451.235847157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92950844.21428572,
            "unit": "ns",
            "range": "± 948512.069674022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194534566.07894737,
            "unit": "ns",
            "range": "± 4147650.4345477507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55165.86956521739,
            "unit": "ns",
            "range": "± 5336.38672404035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317928.1224489796,
            "unit": "ns",
            "range": "± 26420.763012256106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296283.05555555556,
            "unit": "ns",
            "range": "± 12331.025907857445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279918.7886597938,
            "unit": "ns",
            "range": "± 19290.663168982574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4090631.222222222,
            "unit": "ns",
            "range": "± 87245.68469258021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3657774.85,
            "unit": "ns",
            "range": "± 83632.18438481871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17267.69230769231,
            "unit": "ns",
            "range": "± 1803.369732795356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84491.93617021276,
            "unit": "ns",
            "range": "± 8011.732932176853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80816.52222222222,
            "unit": "ns",
            "range": "± 6915.017868196593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100020.36170212766,
            "unit": "ns",
            "range": "± 11999.578812367392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5073.162921348315,
            "unit": "ns",
            "range": "± 641.2385377997416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16656.337209302324,
            "unit": "ns",
            "range": "± 1533.1280412393721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533760.6021505375,
            "unit": "ns",
            "range": "± 162960.35179081335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2867016.2209302327,
            "unit": "ns",
            "range": "± 154591.6062274025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2382161.1326530613,
            "unit": "ns",
            "range": "± 191042.16414121928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6338567.846153846,
            "unit": "ns",
            "range": "± 260053.53659529603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3063044.6666666665,
            "unit": "ns",
            "range": "± 74059.07668216295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3229077.022727273,
            "unit": "ns",
            "range": "± 105026.74347539288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4175180.9166666665,
            "unit": "ns",
            "range": "± 163569.60856074796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4256215.080645162,
            "unit": "ns",
            "range": "± 110929.80469551429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7504354.307017544,
            "unit": "ns",
            "range": "± 321535.9015577442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6073803.243229167,
            "unit": "ns",
            "range": "± 53199.238267422086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922281.1201822916,
            "unit": "ns",
            "range": "± 13636.770636659438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1235169.0362723214,
            "unit": "ns",
            "range": "± 8841.773566433598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566588.6471354165,
            "unit": "ns",
            "range": "± 15467.478901919128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830233.99921875,
            "unit": "ns",
            "range": "± 8646.837380891358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777551.1992938702,
            "unit": "ns",
            "range": "± 2882.8577570029524"
          }
        ]
      }
    ]
  }
}