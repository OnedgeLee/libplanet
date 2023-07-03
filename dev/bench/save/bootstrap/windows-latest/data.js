window.BENCHMARK_DATA = {
  "lastUpdate": 1688373654287,
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
          "id": "4967018433c09ad5f61c3bab650786a81057aad3",
          "message": "document: Update changelog",
          "timestamp": "2023-07-03T15:02:41+09:00",
          "tree_id": "fc68fc51a13f6b241ea85483bd1fe1b5bde679fd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4967018433c09ad5f61c3bab650786a81057aad3"
        },
        "date": 1688373615874,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624061.4583333333,
            "unit": "ns",
            "range": "± 130177.63561646444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3078941.463414634,
            "unit": "ns",
            "range": "± 108403.36935632986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2114210.7526881723,
            "unit": "ns",
            "range": "± 136686.84811766032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5644530.188679245,
            "unit": "ns",
            "range": "± 234430.89566084996"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55396.739130434784,
            "unit": "ns",
            "range": "± 3204.613812839387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8526547.05882353,
            "unit": "ns",
            "range": "± 173606.7183235108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24248077.777777776,
            "unit": "ns",
            "range": "± 494758.3266909869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59595822.222222224,
            "unit": "ns",
            "range": "± 1223402.2216539057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123046626.66666667,
            "unit": "ns",
            "range": "± 1784055.9294030261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244517400,
            "unit": "ns",
            "range": "± 7160168.539407942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5688969.791666667,
            "unit": "ns",
            "range": "± 63330.14672276868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1828118.3854166667,
            "unit": "ns",
            "range": "± 24018.96405180393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397476.11328125,
            "unit": "ns",
            "range": "± 15785.144864396392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3120596.8229166665,
            "unit": "ns",
            "range": "± 28751.745106253686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985014.6875,
            "unit": "ns",
            "range": "± 13898.639094468339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922705.0032552084,
            "unit": "ns",
            "range": "± 12475.221051801238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3839019.565217391,
            "unit": "ns",
            "range": "± 145641.42362446996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4102734.285714286,
            "unit": "ns",
            "range": "± 134249.5984063599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5142714.583333333,
            "unit": "ns",
            "range": "± 201173.40195747014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4577220.833333333,
            "unit": "ns",
            "range": "± 113401.61404865708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7594157.5,
            "unit": "ns",
            "range": "± 263012.43988079973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330671.1111111111,
            "unit": "ns",
            "range": "± 11315.10700190884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303847.82608695654,
            "unit": "ns",
            "range": "± 11520.1222819597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271516.32653061225,
            "unit": "ns",
            "range": "± 16724.774474170532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4793011.538461538,
            "unit": "ns",
            "range": "± 130695.2220302581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4317591.304347826,
            "unit": "ns",
            "range": "± 105645.72836110608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23082.022471910113,
            "unit": "ns",
            "range": "± 2232.230936537421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101770.52631578948,
            "unit": "ns",
            "range": "± 6164.929529445047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98148.97959183673,
            "unit": "ns",
            "range": "± 9910.727759414478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119382.6530612245,
            "unit": "ns",
            "range": "± 18465.655082638415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7151.063829787234,
            "unit": "ns",
            "range": "± 990.5461381459868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22740,
            "unit": "ns",
            "range": "± 1685.1920781992574"
          }
        ]
      }
    ]
  }
}