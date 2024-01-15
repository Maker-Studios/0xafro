import { Dispatch, SetStateAction, useState } from "react";
import Currency from "./Currency";
import { Bag, CheckedSvg, CloseSvg, CopySvg } from "~~/components//Icons/Icons";
import { Button } from "~~/components//ui/button";
import { Dialog, DialogContent } from "~~/components/ui/dialog";
import { Textarea } from "~~/components/ui/textarea";
import { cn } from "~~/lib/utils";
import { Currencies } from "~~/utils/enums";

interface FundProps {
  isFundOpen: boolean;
  setIsFundOpen: Dispatch<SetStateAction<boolean>>;
  ensName: string;
  isAuthenticated: boolean;
}
const Fund = ({ isFundOpen, setIsFundOpen, ensName, isAuthenticated }: FundProps) => {
  const [currency, setCurrency] = useState<Currencies>(Currencies.ETH);
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

  return (
    <>
      <Button
        onClick={() => setIsFundOpen(true)}
        iconPosition="left"
        icon={
          <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.95343 6.30209V12.3021M12.9534 9.30209H6.95343"
              stroke="white"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.82849 9.30217C2.82849 5.94341 2.82849 4.26404 3.87192 3.2206C4.91536 2.17717 6.59474 2.17717 9.95349 2.17717C13.3122 2.17717 14.9916 2.17717 16.0351 3.2206C17.0785 4.26404 17.0785 5.94341 17.0785 9.30217C17.0785 12.6609 17.0785 14.3403 16.0351 15.3838C14.9916 16.4272 13.3122 16.4272 9.95349 16.4272C6.59474 16.4272 4.91536 16.4272 3.87192 15.3838C2.82849 14.3403 2.82849 12.6609 2.82849 9.30217Z"
              stroke="white"
              strokeWidth="1.125"
            />
          </svg>
        }
        text="Fund"
        className="bg-[#000] text-[11px] px-[11px] py-[18px] h-0 md:w-auto w-full  rounded-full transition duration-150 ease-in-out hover:bg-[#000]/80"
      />
      <Dialog onOpenChange={setIsFundOpen} open={isFundOpen}>
        <DialogContent className="md:space-y-8 space-y-[25px] md:p-6 p-[19px]">
          <div className="flex justify-between items-center ">
            <h3 className="text-[20px] font-ibm_plex_mono font-medium leading-6">Fund stream</h3>
            <span
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F8F8F8] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8F8F8]/70"
              onClick={() => setIsFundOpen(false)}
            >
              <CloseSvg width={24} height={24} />
            </span>
          </div>

          <div
            className={cn(
              "border border-[#F0F0F0] rounded-[8px] p-3 flex md:justify-center justify-between items-center space-x-5",
              isAuthenticated && "hidden",
            )}
          >
            <div className="bg-[#F9FBFC] flex items-center space-x-[7px] py-[5px] pr-[11px] pl-[5px] rounded-full">
              <div className=" md:w-8 md:h-8 w-[22px] h-[22px] rounded-full relative">
                <img src="/avatar.png" alt="avatar image" className="w-full h-full" />
              </div>
              <span className="flex items-start space-x-[11px]">
                <p className="text-[11px]  font-bold">{ensName}</p>
                {copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}
              </span>
            </div>
            <span className="flex items-center space-x-[7px]">
              <span className="flex items-center justify-center md:w-[40px] w-[33px] md:h-[40px] h-[33px] bg-[#F8F8F8] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8F8F8]/70">
                <Bag />
              </span>
              <span>
                <p className="md:text-[14px] text-[11px] font-medium">0.008ETH</p>
                <p className="text-[#909090] md:text-[12px] text-[10px]">Optimism</p>
              </span>
            </span>
          </div>
          <Currency currency={currency} setCurrency={setCurrency} />
          <Textarea
            className="placeholder:text-[#A6A6A6] placeholder:text-[12px] placeholder:font-medium placeholder:leading-5 bg-[#F9FBFC] p-[10px] focus:ring-transparent border-none rounded-[8px] resize-none"
            placeholder="Reason for funding"
          />
          <div className="flex w-full justify-end space-x-3">
            <Button
              iconPosition="left"
              icon={
                <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.95343 6.30209V12.3021M12.9534 9.30209H6.95343"
                    stroke="white"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.82849 9.30217C2.82849 5.94341 2.82849 4.26404 3.87192 3.2206C4.91536 2.17717 6.59474 2.17717 9.95349 2.17717C13.3122 2.17717 14.9916 2.17717 16.0351 3.2206C17.0785 4.26404 17.0785 5.94341 17.0785 9.30217C17.0785 12.6609 17.0785 14.3403 16.0351 15.3838C14.9916 16.4272 13.3122 16.4272 9.95349 16.4272C6.59474 16.4272 4.91536 16.4272 3.87192 15.3838C2.82849 14.3403 2.82849 12.6609 2.82849 9.30217Z"
                    stroke="white"
                    strokeWidth="1.125"
                  />
                </svg>
              }
              text="Fund"
              className="bg-[#000] text-[14px] px-[14px] py-3 rounded-full transition duration-150 ease-in-out hover:bg-[#000]/80"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Fund;
