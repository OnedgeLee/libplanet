using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Net.Consensus
{
    public class DuplicatedVotesPool
    {
        private ConcurrentDictionary<(long, int, PublicKey), List<Vote>> _duplicatedVotes;

        public DuplicatedVotesPool()
        {
            _duplicatedVotes = new ConcurrentDictionary<(long, int, PublicKey), List<Vote>>();
        }

        public void Add(Vote vote, Vote voteDup)
        {
            if (vote.Height != voteDup.Height)
            {
                throw new ArgumentException();
            }

            if (vote.Round != voteDup.Round)
            {
                throw new ArgumentException();
            }

            if (vote.ValidatorPublicKey != voteDup.ValidatorPublicKey)
            {
                throw new ArgumentException();
            }

            if (vote.Flag != voteDup.Flag)
            {
                throw new ArgumentException();
            }

            if (vote.BlockHash is null)
            {
                throw new ArgumentException();
            }

            if (voteDup.BlockHash is null)
            {
                throw new ArgumentException();
            }

            if (vote.BlockHash.Equals(voteDup.BlockHash))
            {
                throw new ArgumentException();
            }

            if (!vote.Verify())
            {
                throw new ArgumentException();
            }

            if (!voteDup.Verify())
            {
                throw new ArgumentException();
            }

            _duplicatedVotes.AddOrUpdate(
                (vote.Height, vote.Round, vote.ValidatorPublicKey),
                new List<Vote>() { vote, voteDup },
                (key, voteList) => voteList.Concat(new List<Vote> { voteDup }).ToList());
        }

        public IEnumerable<Vote[]> Exhaust()
        {
            foreach ((long, int, PublicKey) key in _duplicatedVotes.Keys)
            {
                if (_duplicatedVotes.TryRemove(key, out List<Vote>? voteList))
                {
                    yield return voteList.ToArray();
                }
            }
        }
    }
}
