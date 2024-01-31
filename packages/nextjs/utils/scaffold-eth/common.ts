// To be used in JSON.stringify when a field might be bigint
import { AnkrProvider } from "@ankr.com/ankr.js";

// https://wagmi.sh/react/faq#bigint-serialization
export const replacer = (_key: string, value: unknown) => (typeof value === "bigint" ? value.toString() : value);

export const formatAddress = (address: `0x${string}`) => {
  const prefix = address.substring(0, 6);
  const suffix = address.substring(address.length - 5);
  return `${prefix}...${suffix}`;
};

export const ankrProvider = new AnkrProvider(process.env.NEXT_PUBLIC_ANKR as string);
