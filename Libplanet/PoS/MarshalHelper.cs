using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.PoS
{
    internal static class MarshalHelper
    {
        public static IValue Serialize(this Address address) =>
            new Binary(address.ToByteArray());

        public static IValue Serialize(this bool boolean) =>
            new Bencodex.Types.Boolean(boolean);

        public static IValue Serialize(this int number) =>
            (Text)number.ToString(CultureInfo.InvariantCulture);

        public static IValue Serialize(this long number) =>
            (Text)number.ToString(CultureInfo.InvariantCulture);

        public static IValue Serialize(this BigInteger number) =>
            (Bencodex.Types.Integer)number;

        public static IValue Serialize(this Enum type) => (Text)type.ToString();

        public static IValue Serialize(this Guid number) =>
            new Binary(number.ToByteArray());

        public static IValue Serialize(this Currency currency)
        {
            IValue minters = currency.Minters is IImmutableSet<Address> m
                ? new List(m.Select<Address, IValue>(a => new Binary(a.ByteArray)))
                : (IValue)Null.Value;
            return Dictionary.Empty
                .Add("ticker", currency.Ticker)
                .Add("minters", minters)
                .Add("decimalPlaces", new[] { currency.DecimalPlaces });
        }

        public static Address ToAddress(this IValue serialized) =>
            new Address(((Binary)serialized).ToByteArray());

        public static bool ToBoolean(this IValue serialized) =>
            ((Bencodex.Types.Boolean)serialized).Value;

        public static int ToInteger(this IValue serialized) =>
            int.Parse(((Text)serialized).Value, CultureInfo.InvariantCulture);

        public static long ToLong(this IValue serialized) =>
            int.Parse(((Text)serialized).Value, CultureInfo.InvariantCulture);

        public static BigInteger ToBigInteger(this IValue serialized) =>
            ((Integer)serialized).Value;

        public static T ToEnum<T>(this IValue serialized)
            where T : struct
        {
            return (T)Enum.Parse(typeof(T), (Text)serialized);
        }

        public static Guid ToGuid(this IValue serialized) =>
            new Guid(((Binary)serialized).ToByteArray());

        public static Currency ToCurrency(this Dictionary serialized)
        {
            IImmutableSet<Address>? minters = null;
            if (serialized["minters"] is List mintersAsList)
            {
                minters = mintersAsList.Select(
                    b => new Address(((Binary)b).ByteArray)).ToImmutableHashSet();
            }

            return new Currency(
                (Text)serialized["ticker"], ((Binary)serialized["decimalPlaces"]).First(), minters);
        }
    }
}
