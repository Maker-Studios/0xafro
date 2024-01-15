import { Dispatch, SetStateAction } from "react";
import DialogWrapper from "../DialogWrapper";
import { AvatarSvg } from "~~/components/Icons/Icons";
import { Button } from "~~/components/ui/button";

interface RemoveUserProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  image?: string;
  ensName: string;
}
const RemoveUser = ({ isOpen, setIsOpen, image, ensName }: RemoveUserProps) => {
  return (
    <DialogWrapper title="Remove user" isOpen={isOpen} setIsOpen={setIsOpen} className="max-w-[471px]">
      <div className="space-y-6">
        <div className="w-full flex flex-1 h-[57px] rounded-[12px] bg-[#FFE4E4] p-2">
          <div className="bg-[#F9F9F9] p-2 flex items-center space-x-[13px] rounded-[8px] w-auto border border-[#FF7D7D]">
            <div className="relative overflow-hidden w-[24px] h-[24px] rounded-full flex items-center">
              {image ? (
                <img src={image} alt="image" className="w-full h-full" style={{ objectFit: "cover" }} />
              ) : (
                <AvatarSvg width={20} height={20} />
              )}
            </div>
            <p className="text-[18px] font-medium leading-[19px]">{ensName}</p>
          </div>
        </div>
        <p className="text-[#878787] text-[12px] font-medium leading-[20px]">
          Please note that this action cannot be undone and removing user doesn’t delete their contributions to
          projects.
        </p>
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

export default RemoveUser;
