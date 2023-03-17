window.BENCHMARK_DATA = {
  "lastUpdate": 1679043360159,
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
          "id": "679a8a98e6576a4515f5b449340f31ab85047b7d",
          "message": "Release 0.51.3",
          "timestamp": "2023-03-17T17:42:57+09:00",
          "tree_id": "0e5ef6e39328e71b5e04266b0f2f1b9e4003d975",
          "url": "https://github.com/OnedgeLee/libplanet/commit/679a8a98e6576a4515f5b449340f31ab85047b7d"
        },
        "date": 1679043334758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026920,
            "unit": "ns",
            "range": "± 104611.2032164043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1721592.6829268292,
            "unit": "ns",
            "range": "± 55811.322284299546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1522448.4536082475,
            "unit": "ns",
            "range": "± 99860.76568715778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3664636.470588235,
            "unit": "ns",
            "range": "± 196578.08811129027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33958.46153846154,
            "unit": "ns",
            "range": "± 1595.3930068023506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 5027192.307692308,
            "unit": "ns",
            "range": "± 18498.3090010259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 12971300,
            "unit": "ns",
            "range": "± 75743.91064633513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 33092660,
            "unit": "ns",
            "range": "± 359384.6582304656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 65313126.315789476,
            "unit": "ns",
            "range": "± 1433438.6332801685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 131849223.52941176,
            "unit": "ns",
            "range": "± 2562107.478114797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3629547.4051339286,
            "unit": "ns",
            "range": "± 5438.324098572654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1104178.2096354167,
            "unit": "ns",
            "range": "± 1750.6111377499205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 837918.5611979166,
            "unit": "ns",
            "range": "± 1779.0985681121847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922790.7301682692,
            "unit": "ns",
            "range": "± 2346.625422042186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610199.5042067308,
            "unit": "ns",
            "range": "± 1125.2134102770242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 525130.9291294643,
            "unit": "ns",
            "range": "± 1045.0061925596972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2117885.714285714,
            "unit": "ns",
            "range": "± 14610.894625526587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3357256.6666666665,
            "unit": "ns",
            "range": "± 99224.20687455787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 15828618.181818182,
            "unit": "ns",
            "range": "± 368833.3907469199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4098904.2253521127,
            "unit": "ns",
            "range": "± 199485.05095199466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18281840,
            "unit": "ns",
            "range": "± 330659.95869732136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 132926.4705882353,
            "unit": "ns",
            "range": "± 6345.7499620778935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 133950,
            "unit": "ns",
            "range": "± 5185.741498919612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 107930,
            "unit": "ns",
            "range": "± 2345.903484351975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7481253.333333333,
            "unit": "ns",
            "range": "± 85031.66525029423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6146450,
            "unit": "ns",
            "range": "± 73210.04029503057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13131.521739130434,
            "unit": "ns",
            "range": "± 1450.7996542889216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 37847.12643678161,
            "unit": "ns",
            "range": "± 2794.755848239648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 27434.21052631579,
            "unit": "ns",
            "range": "± 1409.8276614848066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66743.75,
            "unit": "ns",
            "range": "± 11439.293431437376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3638.144329896907,
            "unit": "ns",
            "range": "± 430.9493635589801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16783.870967741936,
            "unit": "ns",
            "range": "± 1596.1427909985566"
          }
        ]
      }
    ]
  }
}