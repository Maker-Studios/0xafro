import { Dispatch, SetStateAction, useRef, useState } from "react";
import { DollarSvg, EthSvg } from "../Icons/Icons";
import { Input } from "../ui/input";
import { useOutsideClick } from "~~/hooks/useOutsideClick";
import { cn } from "~~/lib/utils";
import { Currencies } from "~~/utils/enums";

interface CurrencyProps {
  currency: Currencies;
  setCurrency: Dispatch<SetStateAction<Currencies>>;
}
const Currency = ({ currency, setCurrency }: CurrencyProps) => {
  const [amount, setAmount] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangleHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, "");
    if (value.startsWith(".")) {
      value = "0" + value;
    }
    setAmount(value);
  };

  useOutsideClick(inputRef, () => {
    if (amount === "") {
      setAmount("0");
    }
  });

  return (
    <div className="flex justify-between pr-2 py-2 pl-4 space-x-2  rounded-[8px] bg-[#F9FBFC]">
      <div className="flex items-center space-x-2 py-2 w-full">
        {currency === "eth" ? <EthSvg /> : <DollarSvg />}

        <Input
          className="h-4 flex-1 cursor-pointer bg-transparent text-[16px] placeholder:text-[#A6A6A6] px-px font-medium leading-4 ring-offset-0 focus-visible:ring-0 outline-none border-none border-transparent focus-visible:ring-offset-0"
          value={amount}
          onChange={onChangleHandle}
          ref={inputRef}
          placeholder="0"
          autoFocus={false}
        />
      </div>
      <div
        className="bg-white dark:bg-[#0D0D0D]  flex justify-center items-center px-1 py-[4px] rounded-full space-x-[6px]"
        style={{
          boxShadow: "0px 1px 1px 0px rgba(226, 226, 226, 0.25) inset",
        }}
      >
        <span
          className={cn(
            "px-[6px] py-[1px] rounded-full cursor-pointer bg-[#F9F9F9]",
            currency === Currencies.ETH && "bg-[#2E2F34] dark:bg-[#FCFCFC] text-white dark:text-black",
          )}
          onClick={() => setCurrency(Currencies.ETH)}
        >
          <p className="text-[12px]">Eth</p>
        </span>
        <svg width={3} height={8} viewBox="0 0 3 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.911621" width={2} height={7} rx={1} fill="#DADADA" />
        </svg>

        <span
          className={cn(
            "px-[6px] py-[1px] rounded-full cursor-pointer bg-[#F9F9F9]",
            currency === Currencies.USD && "bg-[#2E2F34] dark:bg-[#FCFCFC] text-white dark:text-black",
          )}
          onClick={() => setCurrency(Currencies.USD)}
        >
          <p className="text-[12px]">USD</p>
        </span>
      </div>
    </div>
  );
};

export default Currency;
