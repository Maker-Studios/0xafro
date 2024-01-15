import { useState } from "react";
import Contributor from "./Contributor";
import { AddUser, ManagerUsers } from "./Dialogs";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { AddUserSvg, ManagerUsersSvg, ThreeDots } from "~~/components/Icons/Icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "~~/components/ui/dropdown-menu";
import { cn } from "~~/lib/utils";

const HackerEthStreams = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isAddNameOpen, setIsAddNameOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEditStreamOpen, setIsEditStreamOpen] = useState<boolean>(false);
  const [isManagerUserOpen, setIsManagerOpen] = useState<boolean>(false);

  const openAddNameHandle = () => {
    setIsAddNameOpen(prev => !prev);
    setIsEditStreamOpen(false);
    setIsManagerOpen(false);
  };

  const openManagerUsersHandle = () => {
    setIsManagerOpen(prev => !prev);
    setIsAddNameOpen(false);
    setIsEditStreamOpen(false);
  };

  return (
    <>
      <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
        <div className="flex justify-between items-center">
          <p className="font-medium leading-6 font-ibm_plex_mono">Hacker ETH Streams</p>
          <DropdownMenu onOpenChange={setIsActive} open={isActive}>
            <DropdownMenuTrigger className="ring-offset-0 select-none outline-none">
              <span
                className={cn(
                  "flex items-center justify-center w-6 h-6 rounded-full bg-[#F8F8F8] cursor-pointer border border-transparent ring-0 ring-offset-transparent",
                  isActive && "border-black ring-2 ring-slate-500",
                )}
                onClick={() => setIsActive(prev => !prev)}
                style={{
                  boxShadow: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))",
                }}
              >
                <ThreeDots />
              </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="absolute -right-4 top-2 min-w-[157px] p-1">
              <DropdownMenuItem>
                <span className="flex justify-between items-center w-full" onClick={openAddNameHandle}>
                  <h6 className="font-medium leading-[13px]">Add User</h6>

                  <AddUserSvg />
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="flex justify-between items-center w-full" onClick={openManagerUsersHandle}>
                  <h6 className="font-medium leading-[13px]">Manager Users</h6>
                  <ManagerUsersSvg />
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div
          className=" p-4 rounded-[16px] border-[0.5px] border-[#CDDFE9] bg-white space-y-7 select-none"
          style={{
            boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
          }}
        >
          <Contributor ensName="leyeconnect.eth" amount="0.136" image="/avatar.png" />
          <Contributor ensName="mazikvng.eth" amount="0.237" />
          <Contributor ensName="moscode.eth" amount="0.0237" />
        </div>
      </div>
      <AddUser isOpen={isAddNameOpen} setIsOpen={openAddNameHandle} />

      <ManagerUsers isOpen={isManagerUserOpen} setIsOpen={openManagerUsersHandle} />
    </>
  );
};

export default HackerEthStreams;
