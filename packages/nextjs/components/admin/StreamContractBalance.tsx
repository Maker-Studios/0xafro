import { useState } from "react";
import Fund from "./Fund";
import WithDraw from "./WithDraw";
import { AvatarSvg, CheckedSvg, CopySvg } from "~~/components/Icons/Icons";
import { cn } from "~~/lib/utils";

export interface ImageObject {
  id: string;
  url: string;
}
/* eslint-disable react-hooks/rules-of-hooks */
interface StreamContractBalanceProps {
  address?: string;
}
const StreamContractBalance = ({ address = "0x3DD...A1ff" }: StreamContractBalanceProps) => {
  const [currency, setCurrency] = useState<"eth" | "usd">("eth");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(true);
  const [isFundOpen, setIsFundOpen] = useState<boolean>(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  //TODO: fixing focus on The Text area  and Adding the animination on display images field

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
              <p className="">{address}</p>
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
              onClick={() => setCurrency("eth")}
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
              onClick={() => setCurrency("usd")}
            >
              <p className="text-[12px]">USD</p>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="flex items-center space-x-px">
              <p className="text-[32px] font-medium">0.00</p>
              <p className="font-medium">USD</p>
            </span>
            <p className="text-[#909090] text-[12px]">Optimism</p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:justify-end justify-between space-x-3">
        <Fund isFundOpen={isFundOpen} setIsFundOpen={setIsFundOpen} ensName="leyeconnect.eth" isAuthenticated={false} />
        {isAuthenticated && <WithDraw isWithdrawOpen={isWithdrawOpen} setIsWithdrawOpen={setIsWithdrawOpen} />}
      </div>
    </div>
  );
};

export default StreamContractBalance;
