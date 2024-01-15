import { useState } from "react";
import { ImageObject } from "./StreamContractBalance";
import { AvatarSvg, CalenderSvg, CheckedSvg, CopySvg, EthSvg } from "~~/components/Icons/Icons";
import { cn } from "~~/lib/utils";

interface ContributionProps {
  image?: string;
  date: string;
  ensName: string;
  destribution: string;
  coverImages?: ImageObject[];
}
const Contribution = ({ image, date, ensName, destribution, coverImages }: ContributionProps) => {
  const [copied, setCopied] = useState(false);

  //TODO: Inserting cover images array
  const CoverImageToMap = coverImages?.slice(0, 3);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(ensName);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    } finally {
      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <div className="space-y-5 w-full">
      <div className="flex items-center space-x-2 w-full">
        <span className="p-[5px] rounded-full border border-[#CDDFE9]">
          <CalenderSvg />
        </span>
        <h6>{date}</h6>
      </div>
      <div className="flex space-x-6 w-full">
        <div className="flex space-x-6 pl-[14px] w-full">
          <div className="w-px h-full bg-[#CDDFE9]"></div>
          <div
            className="p-4 w-full mb-6 border-[0.5px] border-[#CDDFE9] bg-white rounded-[16px] "
            style={{
              boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
            }}
          >
            <div className="space-y-[11px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 relative rounded-full">
                    {image ? <img src={image} className="w-full h-full" /> : <AvatarSvg width={20} height={20} />}
                  </div>
                  <h6 className="text-[15px] font-medium">{ensName}</h6>
                  {copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}
                </div>
                <div className="flex items-center space-x-[4px] py-1 pr-[7px] pl-[5.5px]">
                  <EthSvg />
                  <p>0.5</p>
                </div>
              </div>
              <p className="text-[12px] text-[#878787] font-medium leading-[19px] w-full">{destribution}</p>
              {coverImages !== undefined && coverImages.length !== 0 && (
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

                  {/* <div className="bg-[#E0E0E0]/25"></div>
                  <div className="bg-[#E0E0E0]/25 rounded-r-[8px]"></div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
