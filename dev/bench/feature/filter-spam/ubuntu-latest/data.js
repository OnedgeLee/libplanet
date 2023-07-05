window.BENCHMARK_DATA = {
  "lastUpdate": 1688537915471,
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
          "id": "0b225df110bba031ea1aa7b97806a03648949425",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-04T21:31:23+09:00",
          "tree_id": "7e2b739e9dfc5011a4fcf0809562b554ec8e6f8b",
          "url": "https://github.com/OnedgeLee/libplanet/commit/0b225df110bba031ea1aa7b97806a03648949425"
        },
        "date": 1688474724656,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8116537.8,
            "unit": "ns",
            "range": "± 97194.7817244174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22590578.6,
            "unit": "ns",
            "range": "± 167424.54051252038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56713231.86666667,
            "unit": "ns",
            "range": "± 503646.41617250635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112779252.61538461,
            "unit": "ns",
            "range": "± 605233.6004055981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226665789.93333334,
            "unit": "ns",
            "range": "± 794021.6965608386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47425.391304347824,
            "unit": "ns",
            "range": "± 3049.559705047407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 291617.1891891892,
            "unit": "ns",
            "range": "± 8595.322254439194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276433.6785714286,
            "unit": "ns",
            "range": "± 5478.110508625123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245432.65,
            "unit": "ns",
            "range": "± 5548.827541163894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4530650.6,
            "unit": "ns",
            "range": "± 62103.78270949823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4228424.4,
            "unit": "ns",
            "range": "± 39817.27512345794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20132.55319148936,
            "unit": "ns",
            "range": "± 1430.8319530208305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91585.5925925926,
            "unit": "ns",
            "range": "± 4810.968802584823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79732,
            "unit": "ns",
            "range": "± 2221.7223914376395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89472.56578947368,
            "unit": "ns",
            "range": "± 4549.1930693564445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5292.051020408163,
            "unit": "ns",
            "range": "± 857.1411890631782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19204.75257731959,
            "unit": "ns",
            "range": "± 2442.042924781967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535065.85,
            "unit": "ns",
            "range": "± 80238.90839523073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2889669.5,
            "unit": "ns",
            "range": "± 89747.87676093944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1931641.985915493,
            "unit": "ns",
            "range": "± 94149.00085844065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5195000.071428572,
            "unit": "ns",
            "range": "± 145372.19062064987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6119238.388020833,
            "unit": "ns",
            "range": "± 45371.964606127425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880721.269140625,
            "unit": "ns",
            "range": "± 8131.095321249824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397946.655078125,
            "unit": "ns",
            "range": "± 5726.850054717437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676916.2828125,
            "unit": "ns",
            "range": "± 4401.774614257916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866613.6414713542,
            "unit": "ns",
            "range": "± 2297.0832444077205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759544.1162806919,
            "unit": "ns",
            "range": "± 649.4362667504594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673568.8666666667,
            "unit": "ns",
            "range": "± 60537.05071378857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3849492.25,
            "unit": "ns",
            "range": "± 136291.53288988408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4604326.47368421,
            "unit": "ns",
            "range": "± 96264.63774256673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4196853.428571428,
            "unit": "ns",
            "range": "± 99317.88937476039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6576647.424242424,
            "unit": "ns",
            "range": "± 206084.633846757"
          }
        ]
      },
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
          "id": "f2fa70cc1b37e089a54e82e4e43816dfd9e453fe",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-05T01:46:41+09:00",
          "tree_id": "ab0df906e3b2f33a4f75add01687f353a4f68186",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f2fa70cc1b37e089a54e82e4e43816dfd9e453fe"
        },
        "date": 1688489992046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8126943,
            "unit": "ns",
            "range": "± 96728.55968279323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21644696.125,
            "unit": "ns",
            "range": "± 424527.37008409324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54320790.3125,
            "unit": "ns",
            "range": "± 1055831.171265477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110114475.71428572,
            "unit": "ns",
            "range": "± 2533633.6739182156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214531236.73333332,
            "unit": "ns",
            "range": "± 3712433.3980272575"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45632.394366197186,
            "unit": "ns",
            "range": "± 1789.4637064045855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286014.15555555554,
            "unit": "ns",
            "range": "± 9669.320411758654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276545.3076923077,
            "unit": "ns",
            "range": "± 10716.430761051475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238245.8,
            "unit": "ns",
            "range": "± 4357.106202187738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4421016.1875,
            "unit": "ns",
            "range": "± 85565.99471224438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4036267.722222222,
            "unit": "ns",
            "range": "± 81557.80781377641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17632.31914893617,
            "unit": "ns",
            "range": "± 1058.8432135175497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87918.03773584905,
            "unit": "ns",
            "range": "± 3618.954560910269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73686.61538461539,
            "unit": "ns",
            "range": "± 1168.2224059414327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87239.3875,
            "unit": "ns",
            "range": "± 5101.648511166496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5039.20652173913,
            "unit": "ns",
            "range": "± 646.89613171801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17551.863157894735,
            "unit": "ns",
            "range": "± 1562.6338145969569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1450850.7032967033,
            "unit": "ns",
            "range": "± 84415.43552567129"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2820577.7391304346,
            "unit": "ns",
            "range": "± 69669.29900231742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1917470.5227272727,
            "unit": "ns",
            "range": "± 105601.79167160165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5094947.15625,
            "unit": "ns",
            "range": "± 151712.87419292412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6003114.286979167,
            "unit": "ns",
            "range": "± 47111.4398786543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881199.8998325893,
            "unit": "ns",
            "range": "± 4244.230985056363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355141.057391827,
            "unit": "ns",
            "range": "± 5656.947677073824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590898.5,
            "unit": "ns",
            "range": "± 4288.218053232966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837588.5048828125,
            "unit": "ns",
            "range": "± 2085.343265294203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759335.8526204427,
            "unit": "ns",
            "range": "± 616.1629527913237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3494242.5263157897,
            "unit": "ns",
            "range": "± 118257.31754736906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3595417.55,
            "unit": "ns",
            "range": "± 125480.0177572366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4347339.571428572,
            "unit": "ns",
            "range": "± 100656.12439716294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3994838.4102564105,
            "unit": "ns",
            "range": "± 137198.56930102556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6489194,
            "unit": "ns",
            "range": "± 170763.2784890241"
          }
        ]
      },
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
          "id": "20387f84b688506c9887dc9837718efd25e6e4c5",
          "message": "Add spam filter logic on communicator",
          "timestamp": "2023-07-05T01:47:24+09:00",
          "tree_id": "6ba9c34ff5f586450514be5cbef3dbac166ad4ab",
          "url": "https://github.com/OnedgeLee/libplanet/commit/20387f84b688506c9887dc9837718efd25e6e4c5"
        },
        "date": 1688490147728,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7845126.333333333,
            "unit": "ns",
            "range": "± 131345.08634164903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21795181.533333335,
            "unit": "ns",
            "range": "± 227710.1640403139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54386939.6,
            "unit": "ns",
            "range": "± 566603.8301717145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108779232.86666666,
            "unit": "ns",
            "range": "± 1760553.011456338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216931008.53333333,
            "unit": "ns",
            "range": "± 1538451.2860563875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46380.70238095238,
            "unit": "ns",
            "range": "± 2078.107026591789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287957.8823529412,
            "unit": "ns",
            "range": "± 4902.015272854025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276936.63636363635,
            "unit": "ns",
            "range": "± 10185.384844120175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253493.9642857143,
            "unit": "ns",
            "range": "± 10805.94432197438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4434651.785714285,
            "unit": "ns",
            "range": "± 30473.12518667649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002867.2,
            "unit": "ns",
            "range": "± 51733.29033914512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20326.77894736842,
            "unit": "ns",
            "range": "± 1498.4911501946372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90625.49425287357,
            "unit": "ns",
            "range": "± 4960.08021520274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74543,
            "unit": "ns",
            "range": "± 1982.3598664218362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101480.6875,
            "unit": "ns",
            "range": "± 12236.44910680468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5680.693877551021,
            "unit": "ns",
            "range": "± 838.5080074267808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18568.9375,
            "unit": "ns",
            "range": "± 1516.1634046951674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413958.5729166667,
            "unit": "ns",
            "range": "± 90837.14536022491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711781.891891892,
            "unit": "ns",
            "range": "± 90797.47764416997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1889411.7435897435,
            "unit": "ns",
            "range": "± 88997.86641181617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4977675.16,
            "unit": "ns",
            "range": "± 130153.8180448042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5920142.224330357,
            "unit": "ns",
            "range": "± 19136.928677672196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901643.173549107,
            "unit": "ns",
            "range": "± 1544.5500853070819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365255.59375,
            "unit": "ns",
            "range": "± 4776.623126016677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627226.219951923,
            "unit": "ns",
            "range": "± 3269.8096250602916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837159.3203125,
            "unit": "ns",
            "range": "± 1554.4369536266718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773197.3683035715,
            "unit": "ns",
            "range": "± 458.9387498414211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3518542.8,
            "unit": "ns",
            "range": "± 61136.766876990056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3827926.8571428573,
            "unit": "ns",
            "range": "± 64572.46907974748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4502535.259259259,
            "unit": "ns",
            "range": "± 113758.1419600348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4166523.5,
            "unit": "ns",
            "range": "± 53104.94426894442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6728752.962962963,
            "unit": "ns",
            "range": "± 156666.35249336567"
          }
        ]
      },
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
          "id": "f064f6d554009f1fdadd492b7c51b33e4dd59aa2",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T09:14:02+09:00",
          "tree_id": "236986b6058ee227e77bd34ee31b4f64fe5e269d",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f064f6d554009f1fdadd492b7c51b33e4dd59aa2"
        },
        "date": 1688516898798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8181097.142857143,
            "unit": "ns",
            "range": "± 108200.46156865658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22717568.933333334,
            "unit": "ns",
            "range": "± 135395.40570041863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58255587.6,
            "unit": "ns",
            "range": "± 406492.3195232598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116772071.56666666,
            "unit": "ns",
            "range": "± 786477.1173933495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233610285.14285713,
            "unit": "ns",
            "range": "± 710745.4322474351"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50062.614457831325,
            "unit": "ns",
            "range": "± 2517.396345778639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310331.21428571426,
            "unit": "ns",
            "range": "± 9696.460746155895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303413.6451612903,
            "unit": "ns",
            "range": "± 9252.010298842759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279118.9512195122,
            "unit": "ns",
            "range": "± 9552.354887542704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4761567.785714285,
            "unit": "ns",
            "range": "± 30192.565794550184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4367766.533333333,
            "unit": "ns",
            "range": "± 20343.899867972592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22596.53125,
            "unit": "ns",
            "range": "± 2199.47629150848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102020.24418604652,
            "unit": "ns",
            "range": "± 5553.243723925571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94761.20202020202,
            "unit": "ns",
            "range": "± 6302.302365138357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116123.96875,
            "unit": "ns",
            "range": "± 11905.124065714972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6783.347368421053,
            "unit": "ns",
            "range": "± 1004.4521823173815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22062.694736842106,
            "unit": "ns",
            "range": "± 1794.9546493037394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586897.2783505155,
            "unit": "ns",
            "range": "± 126277.81837107077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2960762.581818182,
            "unit": "ns",
            "range": "± 125237.61793349161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1992226.1686746988,
            "unit": "ns",
            "range": "± 105484.35631199807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5382555.229166667,
            "unit": "ns",
            "range": "± 210226.7715755394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6071978.070870535,
            "unit": "ns",
            "range": "± 22572.643099631834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956286.0874720982,
            "unit": "ns",
            "range": "± 1432.8135517224835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398664.0595703125,
            "unit": "ns",
            "range": "± 3917.5161364474093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2703473.3421875,
            "unit": "ns",
            "range": "± 4680.402563414309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846925.8699776785,
            "unit": "ns",
            "range": "± 292.33977017605065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767187.3413783482,
            "unit": "ns",
            "range": "± 680.4092393295283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3755976.1428571427,
            "unit": "ns",
            "range": "± 61223.12405375193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3961459.714285714,
            "unit": "ns",
            "range": "± 67751.04949675752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4767772.692307692,
            "unit": "ns",
            "range": "± 33392.68337621435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4528291.739130435,
            "unit": "ns",
            "range": "± 112753.0464632643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6999657.277777778,
            "unit": "ns",
            "range": "± 129207.28614622026"
          }
        ]
      },
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
          "id": "1d55738fa0f34a63d8bf637893a33d40283b213e",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T14:54:45+09:00",
          "tree_id": "d47a05494fea83ea76b63ec519a1fcd951e25149",
          "url": "https://github.com/OnedgeLee/libplanet/commit/1d55738fa0f34a63d8bf637893a33d40283b213e"
        },
        "date": 1688537317690,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8476366.666666666,
            "unit": "ns",
            "range": "± 117988.84965638955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22990806.6,
            "unit": "ns",
            "range": "± 164987.92230723175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55545783.4,
            "unit": "ns",
            "range": "± 978463.7107897988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112161193.26666667,
            "unit": "ns",
            "range": "± 1384324.1566035787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222702537.5,
            "unit": "ns",
            "range": "± 5261234.842202351"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48831.82142857143,
            "unit": "ns",
            "range": "± 2544.805283628489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296210.6,
            "unit": "ns",
            "range": "± 9574.625880888212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290274.69444444444,
            "unit": "ns",
            "range": "± 8954.631914966672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249681.96296296295,
            "unit": "ns",
            "range": "± 10470.993346334422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4544078.666666667,
            "unit": "ns",
            "range": "± 56616.601435402656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4073441.6666666665,
            "unit": "ns",
            "range": "± 48204.44331426404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20183.494736842105,
            "unit": "ns",
            "range": "± 1704.7522804612877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92860.90322580645,
            "unit": "ns",
            "range": "± 5378.058836534667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78171.47142857143,
            "unit": "ns",
            "range": "± 3813.0261051928283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100519.05102040817,
            "unit": "ns",
            "range": "± 17442.015672775007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5546.432989690722,
            "unit": "ns",
            "range": "± 681.1270517069559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20034.516483516483,
            "unit": "ns",
            "range": "± 1529.706670230439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1475588.1222222222,
            "unit": "ns",
            "range": "± 83945.03606511619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2832974.435897436,
            "unit": "ns",
            "range": "± 97643.83959784792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940520.6363636365,
            "unit": "ns",
            "range": "± 119658.07577524288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5390781.1,
            "unit": "ns",
            "range": "± 278859.8219142379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6036145.619270833,
            "unit": "ns",
            "range": "± 24661.61862949293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914466.2265625,
            "unit": "ns",
            "range": "± 4904.252342095967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403113.4059895833,
            "unit": "ns",
            "range": "± 4044.1436391769257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647879.8984375,
            "unit": "ns",
            "range": "± 5321.247346858713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845552.9730747768,
            "unit": "ns",
            "range": "± 935.2688107161792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769683.1994977678,
            "unit": "ns",
            "range": "± 541.6235753377995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3522045.1025641025,
            "unit": "ns",
            "range": "± 122231.74880115723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3783183.419354839,
            "unit": "ns",
            "range": "± 104469.00186746758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4654570.225806451,
            "unit": "ns",
            "range": "± 139966.41914919205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4123506.0588235296,
            "unit": "ns",
            "range": "± 82480.72422123137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6639359,
            "unit": "ns",
            "range": "± 110090.59406269422"
          }
        ]
      },
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
          "id": "3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T15:03:14+09:00",
          "tree_id": "7c78d60a3f56f7f87efc4a16806afa2ac67e9d10",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79"
        },
        "date": 1688537737292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7628250.6,
            "unit": "ns",
            "range": "± 19144.096866359912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19458296.666666668,
            "unit": "ns",
            "range": "± 129230.67341920399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50237571.76923077,
            "unit": "ns",
            "range": "± 147869.0210885712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99718106.78571428,
            "unit": "ns",
            "range": "± 904560.660400581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200495761.64285713,
            "unit": "ns",
            "range": "± 1249329.9677983462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46358.049382716046,
            "unit": "ns",
            "range": "± 2440.3730601141424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279568.3409090909,
            "unit": "ns",
            "range": "± 9584.8703523718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276700.037037037,
            "unit": "ns",
            "range": "± 6644.708134364007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227592.38461538462,
            "unit": "ns",
            "range": "± 1923.366126459093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4237422.466666667,
            "unit": "ns",
            "range": "± 29033.978030346905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3851116.285714286,
            "unit": "ns",
            "range": "± 35568.02490446153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16732.630434782608,
            "unit": "ns",
            "range": "± 1307.123531979573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82638.48717948717,
            "unit": "ns",
            "range": "± 3779.7444830274385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71900,
            "unit": "ns",
            "range": "± 1081.6653826391969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88603.10204081633,
            "unit": "ns",
            "range": "± 11707.362764375966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4384.906976744186,
            "unit": "ns",
            "range": "± 370.2020315801178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15750.548387096775,
            "unit": "ns",
            "range": "± 1207.0912443099576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362208.206185567,
            "unit": "ns",
            "range": "± 100995.63649649447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2601065.2333333334,
            "unit": "ns",
            "range": "± 77381.08635732785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1726146.5360824743,
            "unit": "ns",
            "range": "± 104469.13518964405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4675916.529411765,
            "unit": "ns",
            "range": "± 143830.69411832688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6326570.45625,
            "unit": "ns",
            "range": "± 47542.57799665302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883800.2208333334,
            "unit": "ns",
            "range": "± 7110.620346758316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351874.513392857,
            "unit": "ns",
            "range": "± 964.3858850412182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589553.1077008927,
            "unit": "ns",
            "range": "± 3202.5021662355593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823281.7544270833,
            "unit": "ns",
            "range": "± 692.0474397754086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736732.8339092548,
            "unit": "ns",
            "range": "± 1299.5046058735263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3271012.275862069,
            "unit": "ns",
            "range": "± 95200.88890262399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3379176.3333333335,
            "unit": "ns",
            "range": "± 110731.9338607606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4235469.133333334,
            "unit": "ns",
            "range": "± 65254.12072578435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3665521.43902439,
            "unit": "ns",
            "range": "± 130574.72093691197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6335716.733333333,
            "unit": "ns",
            "range": "± 114544.83282507252"
          }
        ]
      },
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
          "id": "3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79",
          "message": "document : Update changelog and test comments",
          "timestamp": "2023-07-05T15:03:14+09:00",
          "tree_id": "7c78d60a3f56f7f87efc4a16806afa2ac67e9d10",
          "url": "https://github.com/OnedgeLee/libplanet/commit/3b4408b3e8ef74ae6de5ccfa8b2ffeb0f5ce3c79"
        },
        "date": 1688537902820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7805607,
            "unit": "ns",
            "range": "± 69983.19478870147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20188232.5,
            "unit": "ns",
            "range": "± 290055.72706948523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51007526.93333333,
            "unit": "ns",
            "range": "± 411249.88062290347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101478606.14285715,
            "unit": "ns",
            "range": "± 942674.4095486935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203412399.46666667,
            "unit": "ns",
            "range": "± 1598255.8023368951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45079.220588235294,
            "unit": "ns",
            "range": "± 2125.5799970240837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280444.7916666667,
            "unit": "ns",
            "range": "± 9870.288051064817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274498.82608695654,
            "unit": "ns",
            "range": "± 9743.204134858644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231399.07692307694,
            "unit": "ns",
            "range": "± 1383.7750576796832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241789.466666667,
            "unit": "ns",
            "range": "± 46438.45495132958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742692,
            "unit": "ns",
            "range": "± 25999.27175903202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17682.40206185567,
            "unit": "ns",
            "range": "± 1823.8288688669156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84331,
            "unit": "ns",
            "range": "± 3315.058014026849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69314.07142857143,
            "unit": "ns",
            "range": "± 1184.5944105821272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87636.85106382979,
            "unit": "ns",
            "range": "± 8909.618931495399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4619.78125,
            "unit": "ns",
            "range": "± 485.061432964939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16030.166666666666,
            "unit": "ns",
            "range": "± 1397.0029624853996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1417408.5625,
            "unit": "ns",
            "range": "± 113933.50817521525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2609271.1052631577,
            "unit": "ns",
            "range": "± 89907.69535316958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1783723.0760869565,
            "unit": "ns",
            "range": "± 100184.33729762041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4847887.68,
            "unit": "ns",
            "range": "± 127818.69883703765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6310128.363839285,
            "unit": "ns",
            "range": "± 21420.192181270766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1889260.1473214286,
            "unit": "ns",
            "range": "± 6875.415974461976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357226.5026041667,
            "unit": "ns",
            "range": "± 456.44699965450695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2621969.478515625,
            "unit": "ns",
            "range": "± 1461.4663786890274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822408.7307477678,
            "unit": "ns",
            "range": "± 975.7996175863478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739411.9647135417,
            "unit": "ns",
            "range": "± 610.8250182583356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3295300.9523809524,
            "unit": "ns",
            "range": "± 69874.26791063802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3454039.4,
            "unit": "ns",
            "range": "± 38482.15154699272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287851.4375,
            "unit": "ns",
            "range": "± 79426.50605683113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3774341.9285714286,
            "unit": "ns",
            "range": "± 47207.571125931594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6283979.6,
            "unit": "ns",
            "range": "± 139531.4114023679"
          }
        ]
      }
    ]
  }
}