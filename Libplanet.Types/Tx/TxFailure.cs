using System;
using System.Diagnostics.Contracts;
using System.Runtime.Serialization;
using Bencodex.Types;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Tx
{
    /// <summary>
    /// Summarizes an execution result of a <see cref="Transaction"/> with any exception-throwing
    /// actions.
    /// </summary>
    [Serializable]
    public sealed class TxFailure : TxExecution
    {
        /// <summary>
        /// Creates a <see cref="TxFailure"/> instance.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block.Hash"/> of the <see cref="Block"/>
        /// that the <see cref="Transaction"/> is executed within.</param>
        /// <param name="txId">The executed <see cref="Transaction"/>'s <see
        /// cref="Transaction.Id"/>.</param>
        /// <param name="exceptionName">The name of the exception type,
        /// e.g., <c>System.ArgumentException</c>.</param>
        /// <param name="exceptionMetadata">Optional metadata about the exception.</param>
        public TxFailure(
            BlockHash blockHash,
            TxId txId,
            string exceptionName
        )
            : base(blockHash, txId)
        {
            ExceptionName = exceptionName;
        }

        /// <summary>
        /// Creates a <see cref="TxFailure"/> instance.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block.Hash"/> of the <see cref="Block"/>
        /// that the <see cref="Transaction"/> is executed within.</param>
        /// <param name="txId">The executed <see cref="Transaction"/>'s <see
        /// cref="Transaction.Id"/>.</param>
        /// <param name="exception">The uncaught exception thrown by an action in the transaction.
        /// </param>
        public TxFailure(
            BlockHash blockHash,
            TxId txId,
            Exception exception)
            : this(
                blockHash,
                txId,
                exception.GetType().FullName ?? string.Empty
            )
        {
        }

        private TxFailure(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ExceptionName = info.GetString(nameof(ExceptionName)) ?? string.Empty;
        }

        /// <summary>
        /// The name of the exception type, e.g., <c>System.ArgumentException</c>.
        /// </summary>
        [Pure]
        public string ExceptionName { get; }

        /// <summary>
        /// Optional metadata about the exception.
        /// </summary>
        [Pure]
        public IValue? ExceptionMetadata => null;

        /// <inheritdoc cref="ISerializable.GetObjectData(SerializationInfo, StreamingContext)"/>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(ExceptionName), ExceptionName);
            info.AddValue(
                nameof(ExceptionMetadata),
                ExceptionMetadata is { } m ? _codec.Encode(m) : null
            );
        }
    }
}
