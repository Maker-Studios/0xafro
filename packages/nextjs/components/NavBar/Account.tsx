import { HTMLAttributes, useState } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "~~/lib/utils";

interface AccountProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  ensName: string;
  amount: string;
  image: string;
  isOpen: boolean;
  address: string;
}

const Account = ({ className, address, ensName, amount, image, isOpen }: AccountProps) => {
  const [copied, setCopied] = useState(false);

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
          className={cn(
            "w-[250px] bg-white absolute -bottom-52 md:right-[80px] right-16  rounded-[13px] px-[13px] pt-5 pb-[13px] space-y-[26px] text-center flex flex-col items-center z-50",
            className,
          )}
          style={{
            boxShadow: "0px 12.5px 25px 0px rgba(0, 0, 0, 0.05)",
          }}
          onClick={e => e.stopPropagation()}
          // ref={ref}
        >
          <div className="flex flex-col space-y-[10px]">
            <div className="w-[61px] h-[61px] rounded-full relative mx-auto">
              <img src={image} alt="avatar image" className="w-full h-full" />
            </div>
            <span className="space-y-[6px]">
              <p className="text-[13px] font-bold leading-[13px]">{ensName}</p>
              <p className="text-[#C0C0C0] text-[11px] font-medium leading-[13px]">{amount}</p>
            </span>
          </div>

          <div className="flex justify-between items-center md:space-x-[5px] space-x-1">
            {copied ? (
              <Button
                text={"Copied"}
                icon={
                  <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.9166 8.32218C14.9166 4.64028 11.9318 1.65552 8.24992 1.65552C4.56802 1.65552 1.58325 4.64028 1.58325 8.32218C1.58325 12.0041 4.56802 14.9889 8.24992 14.9889C11.9318 14.9889 14.9166 12.0041 14.9166 8.32218Z"
                      stroke="#141B34"
                    />
                    <path d="M5.58325 8.6556L7.24992 10.3223L10.9166 6.32227" stroke="#141B34" />
                  </svg>
                }
                className="text-[12px] font-bold md:leading-[11px]  py-5 md:px-[19px] px-[15px]  h-0 text-black rounded-l-full bg-[#F8F8F8] hover:bg-[#F8F8F8]/50 transition duration-300 ease-in-out"
              />
            ) : (
              <Button
                text={"Copy address"}
                className="text-[12px] font-bold md:leading-[11px]  py-5 md:px-2 px-1 h-0 text-black rounded-l-full bg-[#F8F8F8] hover:bg-[#F8F8F8]/50 transition duration-300 ease-in-out"
                onClick={handleCopyClick}
              />
            )}

            <Button
              text="Disconnect"
              className="text-[12px] font-bold leading-[11px] rounded-r-full py-5 px-2 h-0 text-black bg-[#F8F8F8] hover:bg-[#F8F8F8]/50 transition duration-300 ease-in-out"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Account;
