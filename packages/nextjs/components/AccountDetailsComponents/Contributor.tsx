/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { AvatarSvg, CheckedSvg, CopySvg } from "../Icons/Icons";
import { Progress } from "../ui/progress";
import { formatEther } from "viem";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { BuilderData } from "~~/types/utils";
import { formatAddress } from "~~/utils/scaffold-eth/common";

const Contributor = ({ builderAddress, cap, unlockedAmount }: BuilderData) => {
  const [copied, setCopied] = useState(false);
  const formattedUnlockedAmount = formatEther(unlockedAmount);
  const formattedCap = formatEther(cap);

  // TODO : Make clicking on ENS name lead to the explorer

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(builderAddress);
      setCopied(true);

      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    }
  };

  const { data: ensName } = useEnsName({
    address: builderAddress as `0x${string}`,
    chainId: 1,
  });
  const { data: ensAvatar } = useEnsAvatar({
    name: normalize(ensName as string),
    enabled: !!ensName,
    chainId: 1,
  });

  const value = (parseFloat(formattedUnlockedAmount) / parseFloat(formattedCap)) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 relative rounded-full">
          {ensAvatar ? (
            <img src={ensAvatar} alt={ensName || builderAddress} className="w-full h-full rounded-full" />
          ) : (
            <AvatarSvg width={20} height={20} />
          )}
        </div>

        <h6 className="text-[15px] font-medium">{ensName || formatAddress(builderAddress as `0x${string}`)}</h6>
        {copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}
      </div>
      <div className="flex items-center justify-between space-x-[26px]">
        <Progress value={value} className="md:w-[59%] w-[50%]" />

        <div className="flex items-center space-x-[5px]">
          <p>Ξ</p>
          <p className="font-medium">
            {Number(formatEther(unlockedAmount)).toFixed(3)} / {formatEther(cap)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contributor;
