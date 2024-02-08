/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction, useState } from "react";
import AddProjectPeopleSelection from "./AddProjectTitleSelection";
import DialogWrapper from "./DialogWrapper";
import User from "./User";
import { v4 } from "uuid";
import Currency from "~~/components/AccountDetailsComponents/Currency";
import { AdminSvg, DeveloperSvg, DisignerSvg, ProductSvg } from "~~/components/Icons/Icons";
import { Button } from "~~/components/ui/button";
import { Textarea } from "~~/components/ui/textarea";
import { cn } from "~~/lib/utils";
import { Currencies, Titles } from "~~/utils/enums";

interface AddUserProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const projectPeopleSelectionMap = [
  {
    id: v4(),
    color: "#F4F3FF",
    title: Titles.DESIGNER,
    icon: <DisignerSvg />,
    textColor: "#9747FF",
  },
  {
    id: v4(),
    color: "#F4F3FF",
    title: Titles.DEVELOPER,
    icon: <DeveloperSvg />,
    textColor: "#2360FF",
  },
  {
    id: v4(),
    color: "#F6FBF6",
    title: Titles.PRODUCTMANAGER,
    icon: <ProductSvg />,
    textColor: "#03A300",
  },
  {
    id: v4(),
    color: "#FFF4F8",
    title: Titles.ADMIN,
    icon: <AdminSvg />,
    textColor: "#FF6FA3",
  },
];

const AddUser = ({ isOpen, setIsOpen }: AddUserProps) => {
  const [isAddNameOpen, setIsAddNameOpen] = useState<boolean>(false);
  const [ensName, setEnsName] = useState<string>("");
  const [currency, setCurrency] = useState<Currencies>(Currencies.ETH);
  const [ethAmount, setETHAmount] = useState<string>("");
  const [titleSelected, setTitleSelected] = useState<Titles | undefined>(undefined);

  const addUserHandle = () => {
    setIsOpen(false);
    setIsAddNameOpen(true);
  };

  const addConfirmUserHandle = () => {
    setIsAddNameOpen(false);
    setEnsName("");
  };

  return (
    <>
      <DialogWrapper title="Add User" isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="space-y-8">
          <Textarea
            placeholder="Enter username here"
            className="placeholder:text-[#A6A6A6] bg-[#F9FBFC] border-none placeholder:font-ibm_plex_mono placeholder:text-[14px] placeholder:font-medium resize-none"
            autoFocus={false}
            onChange={e => setEnsName(e.target.value)}
          />

          <div className={cn("w-full flex justify-end")} onClick={ensName ? addUserHandle : undefined}>
            <Button
              text="Add user"
              className="bg-black text-[16px] font-ibm_plex_mono font-normal px-[4px] py-3 rounded-full transition duration-150 ease-in-out hover:bg-[#000]/80"
              disabled={!ensName}
            />
          </div>
        </div>
      </DialogWrapper>

      <DialogWrapper title="Add User" isOpen={isAddNameOpen} setIsOpen={setIsAddNameOpen}>
        <div className="space-y-8">
          <div className="w-full flex flex-1 h-[57px] rounded-[8px] bg-[#F9FBFC] py-2 pl-[10px]">
            <User ensName={ensName} imageUrl="/avatar.png" setIsAddNameOpen={setIsAddNameOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {projectPeopleSelectionMap.map(select => {
              return (
                <AddProjectPeopleSelection
                  key={select.id}
                  color={select.color}
                  title={select.title}
                  icon={select.icon}
                  textColor={select.textColor}
                  titleSelected={titleSelected === select.title}
                  onClick={() => setTitleSelected(select.title)}
                />
              );
            })}
          </div>
          {/* <div className="space-y-4">
            <h6 className="font-medium">Allot stream</h6>
            <div className="flex justify-between pr-2 py-2 pl-4  rounded-[8px] bg-[#F9FBFC]">
              <div className="flex items-center space-x-2 py-2">
                {currency === "eth" ? <EthSvg /> : <DollarSvg />}

                <p className="text-[#A6A6A6] font-medium leading-4">000</p>
              </div>
              <div
                className="bg-white dark:bg-[#0D0D0D]  flex justify-center items-center px-1 py-[4px] rounded-full space-x-[6px]"
                style={{
                  boxShadow: "0px 1px 1px 0px rgba(226, 226, 226, 0.25) inset"
                }}
              >
                <span
                  className={cn(
                    "px-[6px] py-[1px] rounded-full cursor-pointer bg-[#F9F9F9]",
                    currency === "eth" &&
                      "bg-[#2E2F34] dark:bg-[#FCFCFC] text-white dark:text-black"
                  )}
                  onClick={() => setCurrency("eth")}
                >
                  <p className="text-[12px]">ETH</p>
                </span>
                <svg
                  width={3}
                  height={8}
                  viewBox="0 0 3 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.911621"
                    width={2}
                    height={7}
                    rx={1}
                    fill="#DADADA"
                  />
                </svg>

                <span
                  className={cn(
                    "px-[6px] py-[1px] rounded-full cursor-pointer bg-[#F9F9F9]",
                    currency === "usd" &&
                      "bg-[#2E2F34] dark:bg-[#FCFCFC] text-white dark:text-black"
                  )}
                  onClick={() => setCurrency("usd")}
                >
                  <p className="text-[12px]">USD</p>
                </span>
              </div>
            </div>
          </div> */}
          <Currency currency={currency} setCurrency={setCurrency} usdPrice={5} setETHAmount={setETHAmount} />

          <div className={cn("w-full flex justify-end")} onClick={titleSelected ? addConfirmUserHandle : undefined}>
            <Button
              text="Add user"
              className="bg-black text-[16px] font-ibm_plex_mono font-normal px-[4px] py-3 rounded-full transition duration-150 ease-in-out hover:bg-[#000]/80"
              disabled={!titleSelected}
            />
          </div>
        </div>
      </DialogWrapper>
    </>
  );
};

export default AddUser;
