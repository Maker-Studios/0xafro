import { useState } from "react";
import { AvatarSvg, CalenderSvg, CheckedSvg, CopySvg, EthSvg } from "../Icons/Icons";
import { formatEther } from "viem";
import { useEnsAvatar, useEnsName } from "wagmi";
// import { ImageObject } from "./StreamContractBalance";
import { cn } from "~~/lib/utils";
import { formatAddress } from "~~/utils/scaffold-eth/common";

interface ContributionProps {
  date: string;
  address: `0x${string}`;
  amount: bigint;
  reason: string;
}

// TODO : Redo cover images to come from IPFS
// coverImages?: ImageObject[];

const Contribution = ({ date, address, amount, reason }: ContributionProps) => {
  const [copied, setCopied] = useState(false);

  //TODO: Inserting cover images array
  // const CoverImageToMap = coverImages?.slice(0, 3);

  const { data: ensName } = useEnsName({
    address,
    chainId: 1,
  });

  const { data: ensAvatar } = useEnsAvatar({
    name: ensName,
    enabled: !!ensName,
    chainId: 1,
  });

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    } finally {
      setTimeout(() => setCopied(false), 1000);
    }
  };

  // const emptyArray = new Array(coverImages).fill(null)

  return (
    <div className="space-y-5 w-full">
      <div className="flex items-center space-x-2 w-full">
        <span className="p-[5px] rounded-full border border-[#BACCD6]">
          <CalenderSvg />
        </span>
        <h6>{date}</h6>
      </div>
      <div className="flex space-x-6 w-full">
        <div className="flex space-x-6 pl-[14px] w-full">
          <div className="w-[0.5px] h-full bg-[#BACCD6]"></div>
          <div
            className="p-4 w-full mb-6 border-[0.5px] border-[#CDDFE9] rounded-[16px] bg-white"
            style={{
              boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
            }}
          >
            <div className="space-y-[11px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 relative rounded-full">
                    {ensAvatar ? (
                      <img src={ensAvatar} className="w-full h-full rounded-full" />
                    ) : (
                      <AvatarSvg width={20} height={20} />
                    )}
                  </div>
                  <h6 className="text-[15px] font-medium">{ensName || formatAddress(address)}</h6>
                  {copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}
                </div>
                <div className="flex items-center space-x-[4px] py-1 pr-[7px] pl-[5.5px]">
                  <p>Ξ</p>
                  <p>{Number(formatEther(amount)).toFixed(2)}</p>
                </div>
              </div>
              <p className="text-[12px] text-[#878787] font-medium leading-[19px] w-full">{reason}</p>
              {/* {coverImages !== undefined && coverImages.length !== 0 && (
                <div
                  className={cn(
                    "h-[86px] w-full grid  gap-1 rounded-[8px]",
                    CoverImageToMap?.length === 1 ? "grid-cols-1" : "grid-cols-3",
                  )}
                >
                  {CoverImageToMap?.map((img, i) => (
                    <div
                      key={img.id}
                      className={cn(
                        "bg-[#E0E0E0]/25 w-full h-full relative overflow-hidden ",
                        i === 0 && " rounded-l-[8px]",
                        i === 2 && " rounded-r-[8px]",
                        CoverImageToMap?.length === 1 && "rounded-[8px]",
                      )}
                    >
                      <img src={img.url} alt="avatar image" className="w-full h-full " style={{ objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
