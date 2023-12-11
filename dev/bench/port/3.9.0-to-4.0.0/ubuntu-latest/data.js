window.BENCHMARK_DATA = {
  "lastUpdate": 1702276756916,
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
          "id": "c440d85a5ce59c88ba6d826ce8d5b8de04a66844",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:33:28+09:00",
          "tree_id": "89f49ba453970fb5696b15c4ec9a17c3c6119325",
          "url": "https://github.com/OnedgeLee/libplanet/commit/c440d85a5ce59c88ba6d826ce8d5b8de04a66844"
        },
        "date": 1702025049782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198923.21929824562,
            "unit": "ns",
            "range": "± 8617.041099626753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194947.91304347827,
            "unit": "ns",
            "range": "± 11105.706642817086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169420.51428571428,
            "unit": "ns",
            "range": "± 5544.879176381778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162978.066666667,
            "unit": "ns",
            "range": "± 35883.73557848551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747040.277777778,
            "unit": "ns",
            "range": "± 55528.32980063161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17344.77659574468,
            "unit": "ns",
            "range": "± 1382.9458207400116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60545.926315789475,
            "unit": "ns",
            "range": "± 3603.905152133822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59506.81460674157,
            "unit": "ns",
            "range": "± 5646.57187752708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62942.32653061225,
            "unit": "ns",
            "range": "± 12279.930442208313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2999.0416666666665,
            "unit": "ns",
            "range": "± 327.83609244372707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14770.268817204302,
            "unit": "ns",
            "range": "± 1403.694543910469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3775181.775,
            "unit": "ns",
            "range": "± 62353.320780861075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1237182.9772135417,
            "unit": "ns",
            "range": "± 17358.17929251765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768308.2731370192,
            "unit": "ns",
            "range": "± 2366.3820282484576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926665.8194110577,
            "unit": "ns",
            "range": "± 3863.4727663463386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612647.6171061198,
            "unit": "ns",
            "range": "± 957.6007161666079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556651.9725864956,
            "unit": "ns",
            "range": "± 4646.219932424419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40516.13829787234,
            "unit": "ns",
            "range": "± 5571.505836586698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2397434.8387096776,
            "unit": "ns",
            "range": "± 71054.37292200801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525196.177777778,
            "unit": "ns",
            "range": "± 59483.12577349864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3089896,
            "unit": "ns",
            "range": "± 51371.606820165885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3141170.4583333335,
            "unit": "ns",
            "range": "± 114946.88207703708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9212659.464285715,
            "unit": "ns",
            "range": "± 223215.86808911336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5556500.866666666,
            "unit": "ns",
            "range": "± 28403.169063294597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14497689.2,
            "unit": "ns",
            "range": "± 91047.88662346863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36979688.13333333,
            "unit": "ns",
            "range": "± 299682.3105988041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74685098.35714285,
            "unit": "ns",
            "range": "± 371162.27576577856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148752113.2857143,
            "unit": "ns",
            "range": "± 1313896.4964880038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991457.5483870967,
            "unit": "ns",
            "range": "± 79541.78037106145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1994566.375,
            "unit": "ns",
            "range": "± 114956.24767071853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1732665.5913978494,
            "unit": "ns",
            "range": "± 127964.62707150215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7966871.62962963,
            "unit": "ns",
            "range": "± 219087.91679284093"
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
          "id": "8ca63e083940b5c631d1b663ea3b013cbdbb5551",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-08T17:38:02+09:00",
          "tree_id": "a11bd8115244fd2a1cfc1570ca010fd21bad81ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/8ca63e083940b5c631d1b663ea3b013cbdbb5551"
        },
        "date": 1702025366457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243157.84615384616,
            "unit": "ns",
            "range": "± 9875.819091142026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228864.1891891892,
            "unit": "ns",
            "range": "± 11114.66949412879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182033.03797468354,
            "unit": "ns",
            "range": "± 9422.841871454539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3300927.214285714,
            "unit": "ns",
            "range": "± 54906.08346311219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3014807.6,
            "unit": "ns",
            "range": "± 36424.80354452365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26453.378787878788,
            "unit": "ns",
            "range": "± 3455.914688197102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81261.28282828283,
            "unit": "ns",
            "range": "± 10274.951344083023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97305.21739130435,
            "unit": "ns",
            "range": "± 2403.1133018445003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95638.46666666666,
            "unit": "ns",
            "range": "± 9361.988236204501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2984.127659574468,
            "unit": "ns",
            "range": "± 487.3689729413039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15827.186813186812,
            "unit": "ns",
            "range": "± 1218.103078215267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45209.244897959186,
            "unit": "ns",
            "range": "± 7311.023158910683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038116.9578947368,
            "unit": "ns",
            "range": "± 106042.83855993894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1986608.8695652173,
            "unit": "ns",
            "range": "± 75835.27975512562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722155.414893617,
            "unit": "ns",
            "range": "± 145807.93891032695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8040708.693877551,
            "unit": "ns",
            "range": "± 317902.4233996052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2616757.6,
            "unit": "ns",
            "range": "± 51366.203399450154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2692407.9464285714,
            "unit": "ns",
            "range": "± 108905.02459022301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3317066.966666667,
            "unit": "ns",
            "range": "± 57466.38414992426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3521172.8125,
            "unit": "ns",
            "range": "± 64209.71069676689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9178632.238095239,
            "unit": "ns",
            "range": "± 167153.64709808302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5964580.423076923,
            "unit": "ns",
            "range": "± 26415.57161177708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14829051.733333332,
            "unit": "ns",
            "range": "± 65047.360082005594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36840951.428571425,
            "unit": "ns",
            "range": "± 168477.46168437455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75731469.83333333,
            "unit": "ns",
            "range": "± 361544.77654713136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150812667.03333333,
            "unit": "ns",
            "range": "± 709304.9092528006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754981.2545072115,
            "unit": "ns",
            "range": "± 12537.784640103482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216985.6880580357,
            "unit": "ns",
            "range": "± 1503.1719470081446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767867.0205078125,
            "unit": "ns",
            "range": "± 2424.3968330862403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917973.1373697917,
            "unit": "ns",
            "range": "± 4233.356342386927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609820.9586838942,
            "unit": "ns",
            "range": "± 1370.2492313579694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575206.7644856771,
            "unit": "ns",
            "range": "± 2506.6152349760914"
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
          "id": "e6cca178282eed916973331c457e46c790195670",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:02:29+09:00",
          "tree_id": "6b20c7740e828ee6028a2080b4ab98ddd351c7ea",
          "url": "https://github.com/OnedgeLee/libplanet/commit/e6cca178282eed916973331c457e46c790195670"
        },
        "date": 1702260808707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197185.52272727274,
            "unit": "ns",
            "range": "± 7334.684373573043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190409.89215686274,
            "unit": "ns",
            "range": "± 6129.393014250046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168874.0465116279,
            "unit": "ns",
            "range": "± 6252.307646185292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3133179.5833333335,
            "unit": "ns",
            "range": "± 17161.322138398275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785228.714285714,
            "unit": "ns",
            "range": "± 24424.278889216803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15417.278350515464,
            "unit": "ns",
            "range": "± 2542.074570037352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60144.65217391304,
            "unit": "ns",
            "range": "± 4440.549249352977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62229.38461538462,
            "unit": "ns",
            "range": "± 899.7549238970149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91159.33838383839,
            "unit": "ns",
            "range": "± 19800.695025786998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3363.7473684210527,
            "unit": "ns",
            "range": "± 372.703406364017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14607.373737373737,
            "unit": "ns",
            "range": "± 3997.599324456501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41589.34020618557,
            "unit": "ns",
            "range": "± 6240.164190358893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004972.6129032258,
            "unit": "ns",
            "range": "± 90965.33190990379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1871587.8673469387,
            "unit": "ns",
            "range": "± 74144.41819704913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590379.6354166667,
            "unit": "ns",
            "range": "± 163961.4390912256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12600391.808510639,
            "unit": "ns",
            "range": "± 1096381.63401659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2376014.5,
            "unit": "ns",
            "range": "± 82779.6472350479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2478303.8571428573,
            "unit": "ns",
            "range": "± 39186.0140667504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3209004.8571428573,
            "unit": "ns",
            "range": "± 38604.97156476719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3102251.9714285713,
            "unit": "ns",
            "range": "± 149779.70679470038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13772219.92631579,
            "unit": "ns",
            "range": "± 987280.0594880932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5457997.571428572,
            "unit": "ns",
            "range": "± 16547.46031972783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14251276.366666667,
            "unit": "ns",
            "range": "± 86195.01324145868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36367080.85714286,
            "unit": "ns",
            "range": "± 89275.74783488527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73739555.07142857,
            "unit": "ns",
            "range": "± 346637.4368211223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152739378.26923078,
            "unit": "ns",
            "range": "± 656541.6137426926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3725897.6764322915,
            "unit": "ns",
            "range": "± 14333.014971546521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204092.9845703125,
            "unit": "ns",
            "range": "± 2780.635487432404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775615.3262416294,
            "unit": "ns",
            "range": "± 1371.4256274091215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965382.46484375,
            "unit": "ns",
            "range": "± 13654.32661924718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620939.6541341146,
            "unit": "ns",
            "range": "± 1155.4255097294172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575891.2888371394,
            "unit": "ns",
            "range": "± 6153.773019914102"
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
          "id": "877ad2c5d904f65958e433697945e48f44b288ef",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:35:05+09:00",
          "tree_id": "1fd77fd5532320aa9c70ccb82fefb0641c31ca3a",
          "url": "https://github.com/OnedgeLee/libplanet/commit/877ad2c5d904f65958e433697945e48f44b288ef"
        },
        "date": 1702262770604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198576.71276595743,
            "unit": "ns",
            "range": "± 7428.294016611404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187059.53773584907,
            "unit": "ns",
            "range": "± 7512.837820286902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164326.96153846153,
            "unit": "ns",
            "range": "± 2358.1562577355717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163080.5,
            "unit": "ns",
            "range": "± 47861.33335078939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2741841.4285714286,
            "unit": "ns",
            "range": "± 26606.69976272398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15545.095744680852,
            "unit": "ns",
            "range": "± 1368.1547208546085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66366.49122807017,
            "unit": "ns",
            "range": "± 2865.719207426739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59993.720430107525,
            "unit": "ns",
            "range": "± 4241.814596745718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64353.701030927834,
            "unit": "ns",
            "range": "± 12816.076713095019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2810.978260869565,
            "unit": "ns",
            "range": "± 347.4806019808676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11914.746835443038,
            "unit": "ns",
            "range": "± 627.694243474591"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40847.9693877551,
            "unit": "ns",
            "range": "± 6078.355879259581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004993.0416666666,
            "unit": "ns",
            "range": "± 100092.70995431308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1853355.3333333333,
            "unit": "ns",
            "range": "± 70343.49060858438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1550409.9247311829,
            "unit": "ns",
            "range": "± 133995.54878129644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12426830.689473685,
            "unit": "ns",
            "range": "± 1059744.5253246864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398367.6875,
            "unit": "ns",
            "range": "± 79678.38982612063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2501931.1428571427,
            "unit": "ns",
            "range": "± 32433.869213090627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3191365.382352941,
            "unit": "ns",
            "range": "± 102101.83530330844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3029552.8493150687,
            "unit": "ns",
            "range": "± 149175.01544175023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13539125.589473683,
            "unit": "ns",
            "range": "± 1095397.0229714878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5575491.571428572,
            "unit": "ns",
            "range": "± 21026.042000939568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14326799.2,
            "unit": "ns",
            "range": "± 223270.91715549774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38162945.28571428,
            "unit": "ns",
            "range": "± 206199.2247502507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74470952.5,
            "unit": "ns",
            "range": "± 349531.43345490185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153679512.66666666,
            "unit": "ns",
            "range": "± 1191015.0120248974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3760041.8239397323,
            "unit": "ns",
            "range": "± 46000.05580221483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233165.8221261161,
            "unit": "ns",
            "range": "± 21092.56524477256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766732.4817457933,
            "unit": "ns",
            "range": "± 2145.4666582222644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960836.8423549107,
            "unit": "ns",
            "range": "± 3190.727679098553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632672.5201009115,
            "unit": "ns",
            "range": "± 2424.610440065503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564802.9320963542,
            "unit": "ns",
            "range": "± 971.5511994036784"
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
          "id": "5ff28f3a8565242adcacbd8c0e13bf9ae8b29a1a",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T11:48:51+09:00",
          "tree_id": "182fa8f84cdf2a96ea69c49606901ce7e259db39",
          "url": "https://github.com/OnedgeLee/libplanet/commit/5ff28f3a8565242adcacbd8c0e13bf9ae8b29a1a"
        },
        "date": 1702263605432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198554.96774193548,
            "unit": "ns",
            "range": "± 8833.216080613629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192739.82,
            "unit": "ns",
            "range": "± 6954.900984315496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170892.42857142858,
            "unit": "ns",
            "range": "± 1899.377568666022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3173888.5,
            "unit": "ns",
            "range": "± 40829.68525237113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2839431.846153846,
            "unit": "ns",
            "range": "± 36783.86162627608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14312.670103092783,
            "unit": "ns",
            "range": "± 2895.7790284655757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64076.074468085106,
            "unit": "ns",
            "range": "± 5978.572601318277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52518.53333333333,
            "unit": "ns",
            "range": "± 1262.5731111185364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58235.69387755102,
            "unit": "ns",
            "range": "± 10947.050342639885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4799.99494949495,
            "unit": "ns",
            "range": "± 1362.6834223942515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13844.802083333334,
            "unit": "ns",
            "range": "± 2057.710355658709"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39940.78350515464,
            "unit": "ns",
            "range": "± 5580.545019355943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989454.4569892474,
            "unit": "ns",
            "range": "± 115973.44169210109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1862956.75,
            "unit": "ns",
            "range": "± 63343.869165928416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1564655.9175257732,
            "unit": "ns",
            "range": "± 135881.81587003818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12480619.302083334,
            "unit": "ns",
            "range": "± 954100.9348949861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2307624.3518518517,
            "unit": "ns",
            "range": "± 50921.45679883549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2500164.5675675673,
            "unit": "ns",
            "range": "± 84781.54213183581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3118348.875,
            "unit": "ns",
            "range": "± 68999.91981836078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3111398.0657894737,
            "unit": "ns",
            "range": "± 158028.59326964305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13602990.93478261,
            "unit": "ns",
            "range": "± 884454.6493824155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5689816.428571428,
            "unit": "ns",
            "range": "± 19389.784743972337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14119687.42857143,
            "unit": "ns",
            "range": "± 137959.46334659003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36445979.115384616,
            "unit": "ns",
            "range": "± 479277.18657205364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73680240.84615384,
            "unit": "ns",
            "range": "± 778084.0637424561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150791088.2142857,
            "unit": "ns",
            "range": "± 528107.7516489602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3656129.286783854,
            "unit": "ns",
            "range": "± 4291.32790478786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189192.7278180805,
            "unit": "ns",
            "range": "± 2610.624551897831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760948.0246930803,
            "unit": "ns",
            "range": "± 828.2938351337303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935926.0025540865,
            "unit": "ns",
            "range": "± 14834.871905094373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623770.4838053385,
            "unit": "ns",
            "range": "± 1184.9648175621717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584431.5734375,
            "unit": "ns",
            "range": "± 1492.6431405992632"
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
          "id": "4048596eab12f95f6088be61103b97977f68ad2e",
          "message": "Merge tag '3.9.0' into port/3.9.0-to-4.0.0\n\nLibplanet 3.9.0",
          "timestamp": "2023-12-11T12:48:29+09:00",
          "tree_id": "2a0a44a1e8aa2d537fb4a3284472cc8b277ca6d5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4048596eab12f95f6088be61103b97977f68ad2e"
        },
        "date": 1702267201382,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214362.78431372548,
            "unit": "ns",
            "range": "± 8654.528993108119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203933.10869565216,
            "unit": "ns",
            "range": "± 13046.329058403491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163737.42857142858,
            "unit": "ns",
            "range": "± 2703.8690359808966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3170370.5384615385,
            "unit": "ns",
            "range": "± 28183.466337007427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811130,
            "unit": "ns",
            "range": "± 29220.079503086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17644.649484536083,
            "unit": "ns",
            "range": "± 3443.141104794541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70908.44210526315,
            "unit": "ns",
            "range": "± 9225.044515507874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77002.77,
            "unit": "ns",
            "range": "± 16647.20109447528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78357.26530612246,
            "unit": "ns",
            "range": "± 20173.810368253387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7686.591836734694,
            "unit": "ns",
            "range": "± 1167.4967037789595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14845.795918367347,
            "unit": "ns",
            "range": "± 3308.415969306543"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40010.742105263154,
            "unit": "ns",
            "range": "± 5263.356035830219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1176194.3229166667,
            "unit": "ns",
            "range": "± 134371.43958363638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2137220.0942028984,
            "unit": "ns",
            "range": "± 102386.41828276875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1852921.7291666667,
            "unit": "ns",
            "range": "± 207353.90833987333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13120084.129032258,
            "unit": "ns",
            "range": "± 926369.7405385624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2593031.6086956523,
            "unit": "ns",
            "range": "± 64131.653108514445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2669524.891891892,
            "unit": "ns",
            "range": "± 66344.44886967802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3322631.882352941,
            "unit": "ns",
            "range": "± 67186.79642225319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3261408.727272727,
            "unit": "ns",
            "range": "± 138818.36688256622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13898788.77173913,
            "unit": "ns",
            "range": "± 906123.6849430378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5865280.266666667,
            "unit": "ns",
            "range": "± 78357.19264137847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14595207.333333334,
            "unit": "ns",
            "range": "± 123151.90851236573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36164981.13333333,
            "unit": "ns",
            "range": "± 169951.59370406735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75714066.57142857,
            "unit": "ns",
            "range": "± 546073.1511302681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150909066.7142857,
            "unit": "ns",
            "range": "± 849561.922330782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3823240.615559896,
            "unit": "ns",
            "range": "± 13360.190863832413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1240247.5731026786,
            "unit": "ns",
            "range": "± 1508.9058202990814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 790259.8007161458,
            "unit": "ns",
            "range": "± 13478.564600511118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935441.9275841345,
            "unit": "ns",
            "range": "± 5536.866290906436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623548.9936523438,
            "unit": "ns",
            "range": "± 3603.177415169491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579292.4707728794,
            "unit": "ns",
            "range": "± 504.0763591092459"
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
          "id": "4e15970ae2da214928f497d10b45ad0aadd42c94",
          "message": "Revive IWorldDelta",
          "timestamp": "2023-12-11T15:27:52+09:00",
          "tree_id": "44352e0952e51643da8174ef84c49b0f62021fcd",
          "url": "https://github.com/OnedgeLee/libplanet/commit/4e15970ae2da214928f497d10b45ad0aadd42c94"
        },
        "date": 1702276745672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202637.10843373495,
            "unit": "ns",
            "range": "± 9956.56220302635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192842.09836065574,
            "unit": "ns",
            "range": "± 8583.05725971214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168602.53333333333,
            "unit": "ns",
            "range": "± 4759.045374669265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3289387.3076923075,
            "unit": "ns",
            "range": "± 36238.85332389492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2788561.9285714286,
            "unit": "ns",
            "range": "± 39666.55810913363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18076.121212121212,
            "unit": "ns",
            "range": "± 6411.371791626486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60649.336842105266,
            "unit": "ns",
            "range": "± 4256.516704982894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52442.53333333333,
            "unit": "ns",
            "range": "± 1546.4745108289626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65558.75257731958,
            "unit": "ns",
            "range": "± 10925.346947228312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3750.659574468085,
            "unit": "ns",
            "range": "± 313.2340686915525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15461.021505376344,
            "unit": "ns",
            "range": "± 1930.4401614460357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40265.26804123711,
            "unit": "ns",
            "range": "± 5751.263537829939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994353.6616161616,
            "unit": "ns",
            "range": "± 89974.88932232956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1906200.4,
            "unit": "ns",
            "range": "± 85190.16098341206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607533.212643678,
            "unit": "ns",
            "range": "± 89520.05968053846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12696188.627659574,
            "unit": "ns",
            "range": "± 1019795.0996334233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2413691.3378378376,
            "unit": "ns",
            "range": "± 81839.35520630698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2684978.710526316,
            "unit": "ns",
            "range": "± 56826.168029818946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3103632.3333333335,
            "unit": "ns",
            "range": "± 55634.262718563055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3259049.5714285714,
            "unit": "ns",
            "range": "± 117174.94086717724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14655026.736263737,
            "unit": "ns",
            "range": "± 870330.3516547272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5665873.066666666,
            "unit": "ns",
            "range": "± 16830.588443437766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14216973.461538462,
            "unit": "ns",
            "range": "± 107133.41397576465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38100002.733333334,
            "unit": "ns",
            "range": "± 146007.8279141551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74332355.35714285,
            "unit": "ns",
            "range": "± 433105.5117320822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150696393.66666666,
            "unit": "ns",
            "range": "± 1056398.4463646596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709924.14453125,
            "unit": "ns",
            "range": "± 48820.455644562346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209044.3903245192,
            "unit": "ns",
            "range": "± 1672.452126712937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763431.37109375,
            "unit": "ns",
            "range": "± 2774.1921599389866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974432.5814302885,
            "unit": "ns",
            "range": "± 19217.855047011104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627633.5396118164,
            "unit": "ns",
            "range": "± 11783.422084618229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570793.8191105769,
            "unit": "ns",
            "range": "± 1230.529758642256"
          }
        ]
      }
    ]
  }
}