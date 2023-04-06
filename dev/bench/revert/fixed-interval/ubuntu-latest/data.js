window.BENCHMARK_DATA = {
  "lastUpdate": 1680752075637,
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
          "id": "f72fd58a9c9a44636e626e85bde13d9cf13d87c4",
          "message": "Revert \"Merge pull request #3063 from OnedgeLee/feature/fixed-interval\"\n\nThis reverts commit 5a6f1997de3b3fb1fab9f50ef160906b3247a8d8, reversing\nchanges made to 6c17ac655f9eb8f0c8736b0d27181c362fd90c54.",
          "timestamp": "2023-04-06T12:11:53+09:00",
          "tree_id": "850e11d88531cbbc0c209aaf41b24521711480e5",
          "url": "https://github.com/OnedgeLee/libplanet/commit/f72fd58a9c9a44636e626e85bde13d9cf13d87c4"
        },
        "date": 1680752060817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4172301.3908045976,
            "unit": "ns",
            "range": "± 226791.37334678302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6558539.303571428,
            "unit": "ns",
            "range": "± 273647.1629964343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31693209.454545453,
            "unit": "ns",
            "range": "± 1171581.3927865003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8085294.484848484,
            "unit": "ns",
            "range": "± 250329.85098604416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36267925.26530612,
            "unit": "ns",
            "range": "± 1441187.9384174966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9388998.287878787,
            "unit": "ns",
            "range": "± 436591.79833949683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25559653.4375,
            "unit": "ns",
            "range": "± 769968.7978448904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64200710.35294118,
            "unit": "ns",
            "range": "± 2067931.4296660025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129999709.46666667,
            "unit": "ns",
            "range": "± 1930956.1683653689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269510483.6,
            "unit": "ns",
            "range": "± 4180754.7972555794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1696039.1195652173,
            "unit": "ns",
            "range": "± 120013.74924930748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3402254.057894737,
            "unit": "ns",
            "range": "± 238981.84365886397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2841760.7311827955,
            "unit": "ns",
            "range": "± 204277.74218632377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7228887.918367347,
            "unit": "ns",
            "range": "± 434998.5304034821"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61293.709677419356,
            "unit": "ns",
            "range": "± 8777.710927190434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7328920.224479167,
            "unit": "ns",
            "range": "± 58990.724368268806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2309257.7171875,
            "unit": "ns",
            "range": "± 37222.92123429676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1644762.829326923,
            "unit": "ns",
            "range": "± 9232.697153517389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3202388.826729911,
            "unit": "ns",
            "range": "± 33415.36468410119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045080.9545200893,
            "unit": "ns",
            "range": "± 17485.65095016521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 967393.0666666667,
            "unit": "ns",
            "range": "± 7435.383557234977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248814.7894736842,
            "unit": "ns",
            "range": "± 17366.730278674466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251680.06097560975,
            "unit": "ns",
            "range": "± 13242.171580097047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233186.92631578946,
            "unit": "ns",
            "range": "± 15799.721276320244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14756674.285714285,
            "unit": "ns",
            "range": "± 481861.06066733116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11916490,
            "unit": "ns",
            "range": "± 338813.4694772542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25978.559139784946,
            "unit": "ns",
            "range": "± 5061.774240972542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67098.62886597938,
            "unit": "ns",
            "range": "± 9526.622339221707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49801.989583333336,
            "unit": "ns",
            "range": "± 5722.0842880798555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122456.02040816327,
            "unit": "ns",
            "range": "± 19881.538808694888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6448.291139240507,
            "unit": "ns",
            "range": "± 798.98159780963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27204.676767676767,
            "unit": "ns",
            "range": "± 6487.731894842194"
          }
        ]
      }
    ]
  }
}