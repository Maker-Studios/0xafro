import { useState } from "react";
import { Progress } from "~~/components//ui/progress";
import { AvatarSvg, CheckedSvg, CopySvg, EthSvg } from "~~/components/Icons/Icons";

interface ContributorProps {
  ensName: string;
  amount: string;
  image?: string;
}
const Contributor = ({ ensName, amount, image }: ContributorProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(ensName);
      setCopied(true);

      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    }
  };

  const value = (parseFloat(amount) / 0.5) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 relative rounded-full">
          {image ? <img src={image} className="w-full h-full" /> : <AvatarSvg width={20} height={20} />}
        </div>
        <h6 className="text-[15px] font-medium">{ensName}</h6>
        {copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}
      </div>
      <div className="flex items-center justify-between space-x-[26px]">
        <Progress value={value} className="md:w-[60%] w-[50%]" />

        <div className="flex items-center space-x-[5px]">
          <EthSvg />
          <p className="font-medium">{amount} / 0.5</p>
        </div>
      </div>
    </div>
  );
};

export default Contributor;
