import { Dispatch, SetStateAction } from "react";
import { AvatarSvg, CloseSvg } from "~~/components/Icons/Icons";

interface UserProps {
  ensName: string;
  imageUrl?: string;
  setIsAddNameOpen: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const User = ({ ensName, imageUrl, setIsAddNameOpen, setIsOpen }: UserProps) => {
  return (
    <div className="bg-white p-2 flex items-center space-x-2 rounded-[8px] border border-[#E2E2E2] w-auto">
      <div className="relative overflow-hidden w-[24px] h-[24px] rounded-full">
        {imageUrl ? (
          <img src={imageUrl} alt="image" className="w-full h-full" style={{ objectFit: "cover" }} />
        ) : (
          <AvatarSvg width={20} height={20} />
        )}
      </div>
      <p className="text-[18px] font-medium leading-[19px]">{ensName}.eth</p>
      <span
        className="bg-[#F9F9F9] rounded-full p-[2px] cursor-pointer"
        onClick={() => {
          setIsOpen(true), setIsAddNameOpen(false);
        }}
      >
        <CloseSvg width={13} height={13} />
      </span>
    </div>
  );
};

export default User;
