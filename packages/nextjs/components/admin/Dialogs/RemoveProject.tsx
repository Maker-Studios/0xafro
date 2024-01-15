import { Dispatch, SetStateAction } from "react";
import DialogWrapper from "../DialogWrapper";
import { EthSvg } from "~~/components/Icons/Icons";
import { Button } from "~~/components/ui/button";

interface RemoveProjectProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  icon: React.ReactNode;
  settingTitle: string;
  color: string;
  bgColor: string;
  image: string;
  description: string;
}
const RemoveProject = ({
  isOpen,
  setIsOpen,
  icon,
  settingTitle,
  description,
  color,
  bgColor,
  image,
}: RemoveProjectProps) => {
  return (
    <DialogWrapper title="Delete Project" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="space-y-6">
        <div className="flex space-x-4 border border-red-500 ring-[3px] ring-red-500/30 rounded-2xl p-4">
          <div className="md:h-[70px] h-[56px] md:w-48 w-full rounded-[4px] bg-[#E0E0E0]/25 relative overflow-hidden">
            <img src={image} alt="avatar image" className="w-full h-full " style={{ objectFit: "cover" }} />
          </div>
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <p className="font-medium leading-6">Product name</p>
              <p className="text-[12px] text-[#878787] font-medium leading-[18px]">{description}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 py-1 px-2 rounded-full" style={{ background: bgColor }}>
                {icon}
                <p className="text-[12px]" style={{ color: color }}>
                  {settingTitle}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-[12px] font-medium text-[#9F9F9F]">Spend</p>
                <span className="flex items-center space-x-1">
                  <EthSvg />
                  <p className="text-[12px] font-medium">0.5</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <Button
            text="Cancel"
            className="bg-[#F9F9F9] text-[16px] text-black font-ibm_plex_mono font-normal h-10 px-[20px] py-[12px]  rounded-full transition duration-150 ease-in-out hover:bg-[#F9F9F9]/80"
            onClick={() => setIsOpen(false)}
          />
          <Button
            text="Delete"
            className="bg-red-500 text-[16px] font-ibm_plex_mono font-normal h-10 px-[20px] py-[12px]  rounded-full transition duration-150 ease-in-out hover:bg-red-500/80"
          />
        </div>
      </div>
    </DialogWrapper>
  );
};

export default RemoveProject;
