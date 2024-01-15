import { useState } from "react";
import { AvatarSvg, CheckedSvg, CopySvg, EthSvg } from "../Icons/Icons";

interface RecentFundingProps {
  date: string;
  ensName: string;
  discription?: string;
}
const RecentFunding = ({ date, ensName, discription }: RecentFundingProps) => {
  const [copied, setCopied] = useState(false);

  //TODO: fixing focus on The Text area

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(ensName);
      setCopied(true);

      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    }
  };
  return (
    <div className="space-y-2 ">
      <h6>{date}</h6>
      <div
        className="p-4 w-full mb-6 border-[0.5px] border-[#CDDFE9] rounded-[16px]  bg-white"
        style={{
          boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
        }}
      >
        <div className="space-y-[11px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 relative rounded-full">
                <AvatarSvg width={20} height={20} />
              </div>
              <h6 className="text-[15px] font-medium">{ensName}</h6>
              {copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}
            </div>
            <div className="flex items-center space-x-[4px] py-1 pr-[7px] pl-[5.5px]">
              <EthSvg />
              <p>0.5</p>
            </div>
          </div>
          {discription && <p className="text-[12px] text-[#878787] font-medium leading-[19px] w-full">{discription}</p>}
        </div>
      </div>
    </div>
  );
};

export default RecentFunding;
