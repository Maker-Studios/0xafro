import { Block } from "viem";

export type Tuple<T, MaxLength extends number = 10, Current extends T[] = []> = Current["length"] extends MaxLength
  ? Current
  : Current | Tuple<T, MaxLength, [T, ...Current]>;

export type BuilderData = {
  cap: bigint;
  unlockedAmount: bigint;
  builderAddress: string;
};

export type Activity = {
  args: {
    amount: bigint;
    reason: string;
    to: `0x${string}`;
  };
  block: Block;
};
