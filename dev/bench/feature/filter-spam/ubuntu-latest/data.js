window.BENCHMARK_DATA = {
  "lastUpdate": 1688490005219,
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
      }
    ]
  }
}