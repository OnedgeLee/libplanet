window.BENCHMARK_DATA = {
  "lastUpdate": 1699516621600,
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
          "id": "b0df8ad4276cdd5c00172084749d2b1d6e02f68d",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-09T16:11:38+09:00",
          "tree_id": "6d6212780ecec18d14e20a872d97f970fede8ab9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/b0df8ad4276cdd5c00172084749d2b1d6e02f68d"
        },
        "date": 1699515552134,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525237.5,
            "unit": "ns",
            "range": "± 29859.646682437487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2490170,
            "unit": "ns",
            "range": "± 130079.20410954302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001925.5102040817,
            "unit": "ns",
            "range": "± 116281.54183440506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8653290.24390244,
            "unit": "ns",
            "range": "± 304951.39924656687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48174.15730337079,
            "unit": "ns",
            "range": "± 2675.542769483998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7468814.285714285,
            "unit": "ns",
            "range": "± 91709.42076549637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20967492.85714286,
            "unit": "ns",
            "range": "± 117941.02479489624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52752492.307692304,
            "unit": "ns",
            "range": "± 474710.9356607422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102738196,
            "unit": "ns",
            "range": "± 2687623.0966351414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213412660,
            "unit": "ns",
            "range": "± 1790353.1514360912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4649094.635416667,
            "unit": "ns",
            "range": "± 17753.90073438806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1476406.654575893,
            "unit": "ns",
            "range": "± 4568.723635578028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1105706.2630208333,
            "unit": "ns",
            "range": "± 2984.862337086529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629078.125,
            "unit": "ns",
            "range": "± 12216.404259564206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822327.5599888393,
            "unit": "ns",
            "range": "± 3480.6472653084907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775956.1393229166,
            "unit": "ns",
            "range": "± 3925.990387203659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3386752.6315789474,
            "unit": "ns",
            "range": "± 73396.65726888122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3527057.1428571427,
            "unit": "ns",
            "range": "± 61881.409091978436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4266606.666666667,
            "unit": "ns",
            "range": "± 73778.77614547296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4122042.0289855073,
            "unit": "ns",
            "range": "± 189194.10776625614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10387151.72413793,
            "unit": "ns",
            "range": "± 662215.7575162393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260021.42857142858,
            "unit": "ns",
            "range": "± 4562.586744621718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245335.55555555556,
            "unit": "ns",
            "range": "± 8049.877343942904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232070.37037037036,
            "unit": "ns",
            "range": "± 12200.824198024948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4153064.285714286,
            "unit": "ns",
            "range": "± 53385.65937003707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3892786.6666666665,
            "unit": "ns",
            "range": "± 67385.06475756296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21610.752688172044,
            "unit": "ns",
            "range": "± 2182.8114283305154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91174.48979591837,
            "unit": "ns",
            "range": "± 7646.5653124271685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72865.30612244898,
            "unit": "ns",
            "range": "± 4540.950035500345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91155.20833333333,
            "unit": "ns",
            "range": "± 11171.866637526007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5390.526315789473,
            "unit": "ns",
            "range": "± 742.633852711906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20040.40404040404,
            "unit": "ns",
            "range": "± 2634.888341045864"
          }
        ]
      },
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
          "id": "c0c0284961da43f5dbc0c1157b201f6dd3d5d6aa",
          "message": "test: Reimplement MockStates",
          "timestamp": "2023-11-09T16:45:26+09:00",
          "tree_id": "18021ed76e529c45a6fd98c79688e08bfe466b3d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c0c0284961da43f5dbc0c1157b201f6dd3d5d6aa"
        },
        "date": 1699516597825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044632,
            "unit": "ns",
            "range": "± 111264.08468780095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1793228.431372549,
            "unit": "ns",
            "range": "± 73145.00752266143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610483.8383838383,
            "unit": "ns",
            "range": "± 179480.78386544116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5912956.25,
            "unit": "ns",
            "range": "± 307801.56678841816"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38832.58426966292,
            "unit": "ns",
            "range": "± 4425.591262010774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5406540,
            "unit": "ns",
            "range": "± 63033.63954497403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13732928.57142857,
            "unit": "ns",
            "range": "± 179672.38317205367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35222226.666666664,
            "unit": "ns",
            "range": "± 406545.82673801394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67883393.33333333,
            "unit": "ns",
            "range": "± 567823.1974160703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131753186.66666667,
            "unit": "ns",
            "range": "± 1517493.8944883845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371869.84375,
            "unit": "ns",
            "range": "± 10486.608895835087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076342.4348958333,
            "unit": "ns",
            "range": "± 2812.109266930156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751474.3815104166,
            "unit": "ns",
            "range": "± 881.9849357945571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969559.486607143,
            "unit": "ns",
            "range": "± 2747.519763360171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623933.9768629808,
            "unit": "ns",
            "range": "± 935.3643883862217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569641.9921875,
            "unit": "ns",
            "range": "± 834.1940606426576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2247531.914893617,
            "unit": "ns",
            "range": "± 86713.09039731816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2367468.5185185187,
            "unit": "ns",
            "range": "± 86453.33090274136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2921000,
            "unit": "ns",
            "range": "± 83446.01270903864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2876905.8139534886,
            "unit": "ns",
            "range": "± 155937.76764326525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6748954.054054054,
            "unit": "ns",
            "range": "± 149051.14445606805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180787.6923076923,
            "unit": "ns",
            "range": "± 8364.424436495685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179239.2857142857,
            "unit": "ns",
            "range": "± 10143.13249608061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142817.39130434784,
            "unit": "ns",
            "range": "± 3406.231211646337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2815235.714285714,
            "unit": "ns",
            "range": "± 38418.977825325564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2608473.3333333335,
            "unit": "ns",
            "range": "± 43012.796545524296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13283.14606741573,
            "unit": "ns",
            "range": "± 1843.6769064128457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64144.8275862069,
            "unit": "ns",
            "range": "± 7387.619414226934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49476.59574468085,
            "unit": "ns",
            "range": "± 4019.8813851840755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63843.15789473684,
            "unit": "ns",
            "range": "± 9538.35095065089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3268.041237113402,
            "unit": "ns",
            "range": "± 766.1519637872898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13167.777777777777,
            "unit": "ns",
            "range": "± 1525.4270190710076"
          }
        ]
      }
    ]
  }
}