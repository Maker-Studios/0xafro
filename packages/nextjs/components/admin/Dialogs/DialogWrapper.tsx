import React, { Dispatch, SetStateAction } from "react";
import { CloseSvg } from "~~/components/Icons/Icons";
import { Dialog, DialogContent } from "~~/components/ui/dialog";
import { cn } from "~~/lib/utils";

interface DialogWrapperProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}
const DialogWrapper = ({ children, className, isOpen, setIsOpen, title }: DialogWrapperProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={cn("md:max-w-[511px] group-max-w-[350px] bg-white p-6", className)}>
        <div className="space-y-6 w-full">
          <div className="flex justify-between items-center ">
            <h3 className="text-[20px] font-ibm_plex_mono font-medium leading-6">{title}</h3>
            <span
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F9FBFC] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F9FBFC]/70"
              onClick={() => setIsOpen(false)}
            >
              <CloseSvg width={24} height={24} />
            </span>
          </div>
          <div>{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
