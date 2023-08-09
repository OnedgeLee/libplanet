window.BENCHMARK_DATA = {
  "lastUpdate": 1691550104923,
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
          "id": "324bd13c01474b989b9dae721079349d289b93c3",
          "message": "wip: test fix",
          "timestamp": "2023-08-08T23:12:37+09:00",
          "tree_id": "539ccc7cb1c6bf65f3aa7baec9e5c1c2e3a31e88",
          "url": "https://github.com/OnedgeLee/libplanet/commit/324bd13c01474b989b9dae721079349d289b93c3"
        },
        "date": 1691505194285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9210466.42,
            "unit": "ns",
            "range": "± 602490.3561308014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23643342.974358976,
            "unit": "ns",
            "range": "± 1211736.4937863895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55763794.84883721,
            "unit": "ns",
            "range": "± 2042594.2168724565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120967991.48913044,
            "unit": "ns",
            "range": "± 11054775.493803238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230784848,
            "unit": "ns",
            "range": "± 4387212.715734839"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77614.26506024097,
            "unit": "ns",
            "range": "± 6578.503614571862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353839.0208333333,
            "unit": "ns",
            "range": "± 44750.20812276899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311798.3202247191,
            "unit": "ns",
            "range": "± 19982.941816687846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310162.24210526317,
            "unit": "ns",
            "range": "± 19886.95324306429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4357002.132075472,
            "unit": "ns",
            "range": "± 172753.5904977017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3816652.6923076925,
            "unit": "ns",
            "range": "± 100886.46317510362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18947.55376344086,
            "unit": "ns",
            "range": "± 2678.605487146946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100225.77083333333,
            "unit": "ns",
            "range": "± 16763.13921202311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102943.3125,
            "unit": "ns",
            "range": "± 13607.395137484307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115724.10638297872,
            "unit": "ns",
            "range": "± 17970.896103498973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7589.391304347826,
            "unit": "ns",
            "range": "± 1251.422100559883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24078.06989247312,
            "unit": "ns",
            "range": "± 4413.29946913883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1965335.78,
            "unit": "ns",
            "range": "± 310337.2883210072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3569581.1770833335,
            "unit": "ns",
            "range": "± 479971.4768038441"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2493720.4896907215,
            "unit": "ns",
            "range": "± 335923.57818165206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7027407.818181818,
            "unit": "ns",
            "range": "± 563112.5222794333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3630217.2282608696,
            "unit": "ns",
            "range": "± 303461.68811648653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3792818.525773196,
            "unit": "ns",
            "range": "± 312245.68147841305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4706324.916666667,
            "unit": "ns",
            "range": "± 348126.2698325866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4193489.7204301073,
            "unit": "ns",
            "range": "± 277308.0638596629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7731158.854166667,
            "unit": "ns",
            "range": "± 608560.1201408207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7374033.594962285,
            "unit": "ns",
            "range": "± 320091.6628512285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165889.9106626157,
            "unit": "ns",
            "range": "± 89961.59842317407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395074.0834263393,
            "unit": "ns",
            "range": "± 21236.806344590223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2817517.8916015625,
            "unit": "ns",
            "range": "± 64753.96037893895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819110.0845102164,
            "unit": "ns",
            "range": "± 6874.822160761445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826532.8972439236,
            "unit": "ns",
            "range": "± 46052.357186233"
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
          "id": "0acaa8512421a414931248c6895a8d7b9bf79651",
          "message": "fix test",
          "timestamp": "2023-08-09T11:42:28+09:00",
          "tree_id": "7fa0e4a5bd26f8b3b447b7de0732f1d1eae06668",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0acaa8512421a414931248c6895a8d7b9bf79651"
        },
        "date": 1691550056895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8406215.55263158,
            "unit": "ns",
            "range": "± 281722.56847856427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20726452.8,
            "unit": "ns",
            "range": "± 725443.1980067188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52777301.89285714,
            "unit": "ns",
            "range": "± 1454578.1461486132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103671372.87096775,
            "unit": "ns",
            "range": "± 3084415.13632296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212914761.84615386,
            "unit": "ns",
            "range": "± 3015974.9768379726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71834.8894736842,
            "unit": "ns",
            "range": "± 13116.27181745063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333520.2826086957,
            "unit": "ns",
            "range": "± 32896.26157367507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321314.2291666667,
            "unit": "ns",
            "range": "± 37378.62235316617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309814.90206185565,
            "unit": "ns",
            "range": "± 19543.063141996932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4251414.322580645,
            "unit": "ns",
            "range": "± 129027.94995565551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3804659.195652174,
            "unit": "ns",
            "range": "± 93845.30090693009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20227.98947368421,
            "unit": "ns",
            "range": "± 4431.689367365924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94220.75,
            "unit": "ns",
            "range": "± 13807.902737200897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99115.64432989691,
            "unit": "ns",
            "range": "± 17656.72426206095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109656.82978723405,
            "unit": "ns",
            "range": "± 15775.291090229326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6051.521276595745,
            "unit": "ns",
            "range": "± 1463.7314958746897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18683.708333333332,
            "unit": "ns",
            "range": "± 3895.046984154611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1601061.6458333333,
            "unit": "ns",
            "range": "± 145565.13063020632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3068341.969072165,
            "unit": "ns",
            "range": "± 176911.69102652208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2407691.329787234,
            "unit": "ns",
            "range": "± 280123.64716695354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6600425.325581395,
            "unit": "ns",
            "range": "± 355343.9532913044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3425500.6166666667,
            "unit": "ns",
            "range": "± 153078.81861538216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3556941.1086956523,
            "unit": "ns",
            "range": "± 134280.12759178368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4573095.876923077,
            "unit": "ns",
            "range": "± 213728.29438693213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4080929.7395833335,
            "unit": "ns",
            "range": "± 357059.6075770674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7490500.548387097,
            "unit": "ns",
            "range": "± 315665.8108826136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7082308.761418269,
            "unit": "ns",
            "range": "± 106541.24631460177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020184.8076636905,
            "unit": "ns",
            "range": "± 46018.449221614086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315521.8067801339,
            "unit": "ns",
            "range": "± 16039.61312637831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635646.0959821427,
            "unit": "ns",
            "range": "± 28466.79334288109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900137.1621744792,
            "unit": "ns",
            "range": "± 9591.34296215008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792025.5244140625,
            "unit": "ns",
            "range": "± 6420.819531592561"
          }
        ]
      }
    ]
  }
}