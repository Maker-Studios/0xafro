import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
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
  const [isCurrecyOpen, setIsCurrencyOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("000");
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePressEnter = useCallback(
    (event: any) => {
      if (event.key === "Enter" && amount) {
        if (amount === "") {
          setAmount("000");
        }
        setIsCurrencyOpen(false);
      }
    },
    [amount],
  );
  const onChangleHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, "");
    if (value.startsWith(".")) {
      value = "0" + value;
    }
    setAmount(value);
  };

  useEffect(() => {
    document.addEventListener("keydown", handlePressEnter);
    return () => {
      document.removeEventListener("keydown", handlePressEnter);
    };
  }, [handlePressEnter]);

  useOutsideClick(inputRef, () => {
    if (amount === "") {
      setAmount("000");
    }
    setIsCurrencyOpen(false);
  });

  return (
    <div className="flex justify-between pr-2 py-2 pl-4  rounded-[8px] bg-[#F9FBFC]">
      <div className="flex items-center space-x-2 py-2">
        {currency === "eth" ? <EthSvg /> : <DollarSvg />}
        {isCurrecyOpen ? (
          <Input
            className="h-6 w-24 cursor-pointer bg-transparent   ring-0"
            value={amount}
            onChange={onChangleHandle}
            ref={inputRef}
          />
        ) : (
          <p className="text-[#A6A6A6] font-medium leading-4 cursor-default" onClick={() => setIsCurrencyOpen(true)}>
            {amount}
          </p>
        )}
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
