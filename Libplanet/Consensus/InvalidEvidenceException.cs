using System;
using System.Runtime.Serialization;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Serves as the base class for exceptions related <see cref="DuplicateVoteEvidence"/>s'
    /// integrity and validity.
    /// </summary>
    public class InvalidEvidenceException : Exception
    {
        /// <inheritdoc cref="Exception(string)"/>
        public InvalidEvidenceException(string message)
            : base(message)
        {
        }

        /// <inheritdoc cref="Exception(SerializationInfo, StreamingContext)"/>
        public InvalidEvidenceException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
