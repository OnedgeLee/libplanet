window.BENCHMARK_DATA = {
  "lastUpdate": 1679032058860,
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
          "id": "1a6649c745a66cf73de53be150868d3aa8b5ccd1",
          "message": "fix: ResolveNetMQAddressAsync to return IPv4",
          "timestamp": "2023-03-17T14:30:41+09:00",
          "tree_id": "502b7a16d11fe8216d54cf7bbc8270eebd4d60e1",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1a6649c745a66cf73de53be150868d3aa8b5ccd1"
        },
        "date": 1679032047070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3368986.966666667,
            "unit": "ns",
            "range": "± 98825.55576175396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5384493.105263158,
            "unit": "ns",
            "range": "± 181174.8012179591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24498950.125,
            "unit": "ns",
            "range": "± 479363.8021480658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6446643.666666667,
            "unit": "ns",
            "range": "± 163540.8228498493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28237799.708333332,
            "unit": "ns",
            "range": "± 729382.2187338901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7636867.142857143,
            "unit": "ns",
            "range": "± 84502.94412245431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21527795.6,
            "unit": "ns",
            "range": "± 259336.0391050301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53751432,
            "unit": "ns",
            "range": "± 816632.7341016191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 108274054,
            "unit": "ns",
            "range": "± 1971591.6818456436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 213473618.93333334,
            "unit": "ns",
            "range": "± 2771763.7878018976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428689.3737373736,
            "unit": "ns",
            "range": "± 95585.73483235105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2891345.714285714,
            "unit": "ns",
            "range": "± 121601.43097180073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248881.327272727,
            "unit": "ns",
            "range": "± 87630.9015277007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5442632.184210527,
            "unit": "ns",
            "range": "± 184805.8489597175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49277.78571428572,
            "unit": "ns",
            "range": "± 2634.9554399260473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877473.801339285,
            "unit": "ns",
            "range": "± 17847.346331625173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894717.4639322916,
            "unit": "ns",
            "range": "± 3347.174727793031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349185.734375,
            "unit": "ns",
            "range": "± 2636.762586998753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648163.0243389425,
            "unit": "ns",
            "range": "± 2722.7598281546857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822042.7118489583,
            "unit": "ns",
            "range": "± 970.7455059246888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765854.9082728794,
            "unit": "ns",
            "range": "± 427.87286374987616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195418.3,
            "unit": "ns",
            "range": "± 5831.096307580236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199542.54545454544,
            "unit": "ns",
            "range": "± 4494.895737201441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168167.70833333334,
            "unit": "ns",
            "range": "± 4368.4332131004185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11963666.166666666,
            "unit": "ns",
            "range": "± 247707.67916668844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10722192.466666667,
            "unit": "ns",
            "range": "± 168190.42178175252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19856.706521739132,
            "unit": "ns",
            "range": "± 1392.5846752564805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53492.760869565216,
            "unit": "ns",
            "range": "± 3370.48992548452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41282.22,
            "unit": "ns",
            "range": "± 1676.6804216446649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95503.77894736842,
            "unit": "ns",
            "range": "± 12876.53841350406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5320.670103092783,
            "unit": "ns",
            "range": "± 542.9564270740617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17773.1797752809,
            "unit": "ns",
            "range": "± 1220.7746847596197"
          }
        ]
      }
    ]
  }
}