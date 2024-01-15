import { Dispatch, SetStateAction } from "react";
import ContributorManager from "./ContributorManager";
import { CloseSvg } from "~~/components/Icons/Icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "~~/components/ui/sheet";
import { Titles } from "~~/utils/enums";

interface ManagerUsersProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ManagerUsers = ({ isOpen, setIsOpen }: ManagerUsersProps) => {
  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetContent className=" md:min-w-[534px] w-[95%] md:py-[54px] py-4 md:pl-[53px] pl-4 md:pr-[58px] pr-4 overflow-y-auto">
        <SheetHeader className="space-y-11">
          <SheetTitle className="flex justify-between items-center">
            <h3 className="text-[20px] font-ibm_plex_mono font-medium leading-6">Manage Users</h3>
            <span
              className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#F8F8F8] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8F8F8]/70"
              onClick={() => setIsOpen(false)}
            >
              <CloseSvg width={24} height={24} />
            </span>
          </SheetTitle>
          <SheetDescription className="space-y-6">
            <ContributorManager ensName="leyeconnect.eth" amount="0.136" image="/avatar.png" title={Titles.DESIGNER} />
            <ContributorManager ensName="mazikvng.eth" amount="0.08" title={Titles.PRODUCTMANAGER} />
            <ContributorManager ensName="moscode.eth" amount="0.020" title={Titles.DEVELOPER} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ManagerUsers;
