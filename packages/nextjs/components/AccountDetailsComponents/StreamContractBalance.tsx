import { useEffect, useState } from "react";
import { AvatarSvg, CheckedSvg, CopySvg } from "../Icons/Icons";
import Fund from "./Fund";
import WithDraw from "./WithDraw";
import { isAddress } from "viem";
import { useAccount, useBalance } from "wagmi";
import { cn } from "~~/lib/utils";
import { Currencies } from "~~/utils/enums";
import { ankrProvider, formatAddress } from "~~/utils/scaffold-eth/common";

export interface ImageObject {
  id: string;
  url: string;
}
/* eslint-disable react-hooks/rules-of-hooks */
interface StreamContractBalanceProps {
  address?: `0x${string}`;
  isContributor: boolean;
}
const StreamContractBalance = ({ address = "0x3DD...A1ff", isContributor }: StreamContractBalanceProps) => {
  const [currency, setCurrency] = useState<Currencies>(Currencies.ETH);
  const [usdPrice, setUsdPrice] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFundOpen, setIsFundOpen] = useState<boolean>(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
  // const [images, setImages] = useState<ImageObject[]>([]);

  // TODO : change this to check if connected address is a builder
  const { address: userAddress } = useAccount();

  const { data: streamBalance } = useBalance({
    address,
  });

  const getTokenPrice = async () => {
    const ethInfo = await ankrProvider.getTokenPrice({
      blockchain: "eth",
    });

    setUsdPrice(Number(ethInfo.usdPrice));
  };

  useEffect(() => {
    getTokenPrice();
  }, []);

  //TODO: fixing focus on The Text area

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);

      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    }
  };

  return (
    <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
      <p className="font-medium font-ibm_plex_mono leading-6">Stream contract balance</p>

      <div
        className="rounded-[16px] p-4 border-[0.5px] border-[#CDDFE9] space-y-8 bg-white"
        style={{
          boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
        }}
      >
        <div className="flex items-center justify-between ">
          <span className="flex items-center space-x-[11px]">
            <AvatarSvg />
            <span className="flex items-center space-x-2">
              <p className="">{isAddress(address) ? formatAddress(address) : address}</p>
              {copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}
            </span>
          </span>
          <div
            className="bg-[#F9F9F9] dark:bg-[#0D0D0D]  flex justify-center items-center px-1 py-[4px] rounded-full space-x-[6px]"
            style={{
              boxShadow: "0px 1px 1px 0px rgba(226, 226, 226, 0.25) inset",
            }}
          >
            <span
              className={cn(
                "px-[6px] py-[1px] rounded-full cursor-pointer",
                currency === "eth" && "bg-[#2E2F34] dark:bg-[#FCFCFC] text-white dark:text-black",
              )}
              onClick={() => setCurrency(Currencies.ETH)}
            >
              <p className="text-[12px]">ETH</p>
            </span>
            <svg width={3} height={8} viewBox="0 0 3 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.911621" width={2} height={7} rx={1} fill="#DADADA" />
            </svg>

            <span
              className={cn(
                "px-[6px] py-[1px] rounded-full cursor-pointer",
                currency === "usd" && "bg-[#2E2F34] dark:bg-[#FCFCFC] text-white dark:text-black",
              )}
              onClick={() => setCurrency(Currencies.USD)}
            >
              <p className="text-[12px]">USD</p>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <p className="text-[32px] font-medium">
                {(currency === "eth"
                  ? Number(streamBalance?.formatted)
                  : Number(streamBalance?.formatted) * Number(usdPrice)
                ).toFixed(2)}
              </p>
              <p className="font-medium">{currency.toUpperCase()}</p>
            </span>
            <p className="text-red-400 text-[12px]">Optimism</p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:justify-end justify-between space-x-3">
        {userAddress ? (
          <>
            <Fund
              isFundOpen={isFundOpen}
              setIsFundOpen={setIsFundOpen}
              address={userAddress as `0x${string}`}
              isAuthenticated={false}
              usdPrice={usdPrice}
              streamAddress={address}
            />
            {isContributor && (
              <WithDraw isWithdrawOpen={isWithdrawOpen} setIsWithdrawOpen={setIsWithdrawOpen} usdPrice={usdPrice} />
            )}
          </>
        ) : (
          <p className="text-xs italic text-[#878787]">Connect wallet to fund/withdraw from stream</p>
        )}
      </div>
    </div>
  );
};

export default StreamContractBalance;
