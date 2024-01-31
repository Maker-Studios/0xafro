import React from "react";
import { CloseSvg } from "../Icons/Icons";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import Contribution from "./Contribution";
import { formatDate } from "date-fns";
import { cn } from "~~/lib/utils";
import { Activity } from "~~/types/utils";

interface ActivitiesProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  activities?: Activity[];
}
const Activities = ({ setIsOpen, isOpen, activities }: ActivitiesProps) => {
  return (
    <>
      <div className={cn("flex justify-center")}>
        <Button
          text="See all Activities"
          variant={"ghost"}
          className="py-[17px] px-2 h-0 border-[0.5px] border-[#E1E1E1] bg-white rounded-full text-[12px]"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetContent className=" md:min-w-[534px] w-[95%] md:py-[54px] py-4 md:pl-[53px] pl-4 md:pr-[58px] pr-4 overflow-y-auto">
          <SheetHeader className="space-y-11">
            <SheetTitle className="flex justify-between items-center">
              <h3 className="text-[20px] font-ibm_plex_mono font-medium leading-6">Activities</h3>
              <span
                className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#F8F8F8] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8F8F8]/70"
                onClick={() => setIsOpen(false)}
              >
                <CloseSvg width={24} height={24} />
              </span>
            </SheetTitle>
            <SheetDescription className="space-y-0">
              {activities?.map((contribution, i) => (
                <div key={i}>
                  <Contribution
                    key={contribution.args.reason}
                    address={contribution.args.to}
                    reason={contribution.args.reason}
                    amount={contribution.args.amount}
                    date={formatDate(Number(contribution.block.timestamp) * 1000, "yyyy-MM-dd")}
                  />
                </div>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Activities;
