window.BENCHMARK_DATA = {
  "lastUpdate": 1691569425749,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f6f3d48aed11a3c3883db57b87cd134dee39353d",
          "message": "fix test",
          "timestamp": "2023-08-09T11:46:58+09:00",
          "tree_id": "85a1d0e44b14a0b54b7bca7e6116d3602dc9bc35",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f6f3d48aed11a3c3883db57b87cd134dee39353d"
        },
        "date": 1691550408244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8002502.3,
            "unit": "ns",
            "range": "± 95800.38405544848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19269808.266666666,
            "unit": "ns",
            "range": "± 106844.76398593205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48775822.65384615,
            "unit": "ns",
            "range": "± 626750.2677685701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94713322.77083333,
            "unit": "ns",
            "range": "± 3693690.4836780885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187988566.2857143,
            "unit": "ns",
            "range": "± 1744970.2344506285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57537.229166666664,
            "unit": "ns",
            "range": "± 7312.521668134039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309574.72463768115,
            "unit": "ns",
            "range": "± 13857.163212241803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308681.6,
            "unit": "ns",
            "range": "± 26586.704151639566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307746.4375,
            "unit": "ns",
            "range": "± 11895.749021530535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4135544.6,
            "unit": "ns",
            "range": "± 75350.14505038649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3730178.5,
            "unit": "ns",
            "range": "± 42844.62076055038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17813.662921348314,
            "unit": "ns",
            "range": "± 1844.093020133476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87509.69230769231,
            "unit": "ns",
            "range": "± 6295.4278818349285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87832.36170212766,
            "unit": "ns",
            "range": "± 7763.820782100912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103909.08333333333,
            "unit": "ns",
            "range": "± 15128.973757707545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5756.583333333333,
            "unit": "ns",
            "range": "± 654.9778407929725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17309.46875,
            "unit": "ns",
            "range": "± 1659.6092371596965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732243.081632653,
            "unit": "ns",
            "range": "± 193306.91317997017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958815.5376344086,
            "unit": "ns",
            "range": "± 184486.3934184142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279590.861702128,
            "unit": "ns",
            "range": "± 216715.1067770525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6144670.8877551025,
            "unit": "ns",
            "range": "± 245333.15664731097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3179272.042105263,
            "unit": "ns",
            "range": "± 212853.0477172193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3293487.3625,
            "unit": "ns",
            "range": "± 169747.82361508143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4245870.2,
            "unit": "ns",
            "range": "± 179599.1197523797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3797653.642105263,
            "unit": "ns",
            "range": "± 251346.89560915585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7164907.073170732,
            "unit": "ns",
            "range": "± 232471.68099947035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6458659.810825893,
            "unit": "ns",
            "range": "± 40999.34901250382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1996151.465625,
            "unit": "ns",
            "range": "± 16637.308990143156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1220037.1891927083,
            "unit": "ns",
            "range": "± 9604.017763480511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2739921.073016827,
            "unit": "ns",
            "range": "± 45006.491905874864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786082.74140625,
            "unit": "ns",
            "range": "± 3580.559244960495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784404.4781901041,
            "unit": "ns",
            "range": "± 3549.4801241922846"
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
          "id": "595b0867bda8bf47eb16023dc4214aae4828c7a6",
          "message": "test: fix",
          "timestamp": "2023-08-09T12:54:45+09:00",
          "tree_id": "29b3b292330f028d9ac0c50fb7bec793d35b7cf9",
          "url": "https://github.com/OnedgeLee/libplanet/commit/595b0867bda8bf47eb16023dc4214aae4828c7a6"
        },
        "date": 1691554488550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8493778.333333334,
            "unit": "ns",
            "range": "± 147072.53799482112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20415220.615384616,
            "unit": "ns",
            "range": "± 185688.86130143367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53518351.82857143,
            "unit": "ns",
            "range": "± 1755863.7798398205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112136516.26470588,
            "unit": "ns",
            "range": "± 2206788.2526747026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223726207.3,
            "unit": "ns",
            "range": "± 5799789.539359539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69332.98901098901,
            "unit": "ns",
            "range": "± 9131.045542536622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 379469.9945054945,
            "unit": "ns",
            "range": "± 54541.62083468889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337517.7444444444,
            "unit": "ns",
            "range": "± 39365.00150280679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328636.44943820225,
            "unit": "ns",
            "range": "± 32120.078654172932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4167115.966666667,
            "unit": "ns",
            "range": "± 60869.002176649425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3692111.0714285714,
            "unit": "ns",
            "range": "± 36445.405065373074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20178.8,
            "unit": "ns",
            "range": "± 3977.302567968864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98167.75,
            "unit": "ns",
            "range": "± 16243.894698268055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79936.47311827957,
            "unit": "ns",
            "range": "± 9687.094980696245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105477.45918367348,
            "unit": "ns",
            "range": "± 14010.491653564679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7105.182795698925,
            "unit": "ns",
            "range": "± 1140.3175277301586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21928.478723404256,
            "unit": "ns",
            "range": "± 6711.319647693808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1651506.2604166667,
            "unit": "ns",
            "range": "± 169710.05478001805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3014095.1923076925,
            "unit": "ns",
            "range": "± 137351.42406963257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187971.6414141413,
            "unit": "ns",
            "range": "± 137364.45165258925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6318161.68627451,
            "unit": "ns",
            "range": "± 242569.03663926193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3615392.8020833335,
            "unit": "ns",
            "range": "± 359550.2118211504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3759504.0416666665,
            "unit": "ns",
            "range": "± 314038.30316346406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4859344.5612244895,
            "unit": "ns",
            "range": "± 434138.61769494624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4121831.1354166665,
            "unit": "ns",
            "range": "± 276429.5888813992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8229307.775510204,
            "unit": "ns",
            "range": "± 731971.8503540084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6975921.285610465,
            "unit": "ns",
            "range": "± 377141.9738621949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008482.7053034855,
            "unit": "ns",
            "range": "± 46350.87846442182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1429889.3926757812,
            "unit": "ns",
            "range": "± 31192.64224393103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3179715.78839173,
            "unit": "ns",
            "range": "± 228052.59616766844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839324.8753150202,
            "unit": "ns",
            "range": "± 25556.498037374036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 824159.8432241586,
            "unit": "ns",
            "range": "± 9282.845086543633"
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
          "id": "f90581cb274e19a5252cca441161d626fa07fc5e",
          "message": "test: fix",
          "timestamp": "2023-08-09T13:25:16+09:00",
          "tree_id": "963bb15b7ce4dfddec78357d92ca86a02e0122a3",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f90581cb274e19a5252cca441161d626fa07fc5e"
        },
        "date": 1691556180216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8782489.395833334,
            "unit": "ns",
            "range": "± 312738.1646162863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21639500.73529412,
            "unit": "ns",
            "range": "± 1034208.0884244794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54452070.166666664,
            "unit": "ns",
            "range": "± 1160953.3347689759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106421717.88461539,
            "unit": "ns",
            "range": "± 1322595.620039533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216177385.42857143,
            "unit": "ns",
            "range": "± 2659271.517515521"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74536.55555555556,
            "unit": "ns",
            "range": "± 6361.472008494294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344127.7395833333,
            "unit": "ns",
            "range": "± 31338.15446997639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319020.3645833333,
            "unit": "ns",
            "range": "± 28999.828099715494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319513.47647058824,
            "unit": "ns",
            "range": "± 20013.00088988374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4132266.0384615385,
            "unit": "ns",
            "range": "± 54804.86440182627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3638004.3,
            "unit": "ns",
            "range": "± 81571.69796088012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19203.622448979593,
            "unit": "ns",
            "range": "± 3153.320068423731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85654.95789473684,
            "unit": "ns",
            "range": "± 8071.515666040947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103383.54040404041,
            "unit": "ns",
            "range": "± 17584.0499397626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108241.51546391753,
            "unit": "ns",
            "range": "± 16459.412622489373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6939.6082474226805,
            "unit": "ns",
            "range": "± 1042.0430509010996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17643.76595744681,
            "unit": "ns",
            "range": "± 2082.805800782896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666246.7577319588,
            "unit": "ns",
            "range": "± 172406.44904714983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958563.7283950616,
            "unit": "ns",
            "range": "± 152859.88581998978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137057.3421052634,
            "unit": "ns",
            "range": "± 204167.2769594806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6410151.243589744,
            "unit": "ns",
            "range": "± 327337.4684530105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3469238.840425532,
            "unit": "ns",
            "range": "± 216536.0601383591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3736406.938202247,
            "unit": "ns",
            "range": "± 245546.3876768203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4629171.736842105,
            "unit": "ns",
            "range": "± 320171.7046167509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4426520.175257732,
            "unit": "ns",
            "range": "± 412944.3208732113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7725776.042253521,
            "unit": "ns",
            "range": "± 369971.2164797008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6779021.6005859375,
            "unit": "ns",
            "range": "± 123211.67605261858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2015464.274188702,
            "unit": "ns",
            "range": "± 9743.422027091285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341358.7904146635,
            "unit": "ns",
            "range": "± 16324.287178167031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2827804.5100097656,
            "unit": "ns",
            "range": "± 53435.26639883902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 935841.8802734375,
            "unit": "ns",
            "range": "± 16750.18646614849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794002.7219238281,
            "unit": "ns",
            "range": "± 14387.372701667784"
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
          "id": "16336d1b3f6ca8ee98311a03c44201df0a615eee",
          "message": "test: fix",
          "timestamp": "2023-08-09T17:05:15+09:00",
          "tree_id": "6550a67fca37def694f76ba7181eddd9fb9a1999",
          "url": "https://github.com/OnedgeLee/libplanet/commit/16336d1b3f6ca8ee98311a03c44201df0a615eee"
        },
        "date": 1691569392060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8439280.587912088,
            "unit": "ns",
            "range": "± 549571.7097437816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19286143.625,
            "unit": "ns",
            "range": "± 584030.0213356662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49864941.7,
            "unit": "ns",
            "range": "± 2116093.671430707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104587275.03061225,
            "unit": "ns",
            "range": "± 7156524.611364078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203165881.70588234,
            "unit": "ns",
            "range": "± 3976566.612439567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56180.217391304344,
            "unit": "ns",
            "range": "± 6502.1931292974705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314471.4831460674,
            "unit": "ns",
            "range": "± 19822.65276492824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299092.65079365077,
            "unit": "ns",
            "range": "± 13569.271093360923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299183.3245614035,
            "unit": "ns",
            "range": "± 12110.91946804737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4116308.5483870967,
            "unit": "ns",
            "range": "± 121514.2442623741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3888776.4838709678,
            "unit": "ns",
            "range": "± 71150.22668357939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18128.315789473683,
            "unit": "ns",
            "range": "± 1795.683875315249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86271.41758241758,
            "unit": "ns",
            "range": "± 8759.629058693617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82556.6182795699,
            "unit": "ns",
            "range": "± 8312.204031801233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102312.75,
            "unit": "ns",
            "range": "± 13827.953689613849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5605.864583333333,
            "unit": "ns",
            "range": "± 1042.990907966545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17093.5,
            "unit": "ns",
            "range": "± 1666.5065812631099"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1758425.2448979593,
            "unit": "ns",
            "range": "± 255901.30522088747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3047919.230769231,
            "unit": "ns",
            "range": "± 303431.1604980637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2390882.244680851,
            "unit": "ns",
            "range": "± 292307.31279106415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6749990.5,
            "unit": "ns",
            "range": "± 568829.6704356003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3228039.951219512,
            "unit": "ns",
            "range": "± 116422.58979660075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3576080.0322580645,
            "unit": "ns",
            "range": "± 313447.7461824154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4575435.666666667,
            "unit": "ns",
            "range": "± 482550.2287931197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3836181.4565217393,
            "unit": "ns",
            "range": "± 216590.20510008017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7823820.111111111,
            "unit": "ns",
            "range": "± 754489.9161950216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6640484.269270834,
            "unit": "ns",
            "range": "± 109189.90762551969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901072.2262620192,
            "unit": "ns",
            "range": "± 15590.134132369996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1256109.1487379808,
            "unit": "ns",
            "range": "± 14927.396085406512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2919699.27125,
            "unit": "ns",
            "range": "± 250170.36696218708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928337.6114393789,
            "unit": "ns",
            "range": "± 45990.228774735064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740799.1573567708,
            "unit": "ns",
            "range": "± 13015.68906645489"
          }
        ]
      }
    ]
  }
}