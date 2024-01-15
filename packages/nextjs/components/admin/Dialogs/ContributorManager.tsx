import { useState } from "react";
import { EditStream, RemoveUser } from ".";
import AddProjectTitleSelection from "./AddProjectTitleSelection";
import { Progress } from "~~/components//ui/progress";
import {
  AdminSvg,
  AvatarSvg,
  CheckedSvg,
  CloseSvg,
  CopySvg,
  DeleteSvg,
  DeveloperSvg,
  DisignerSvg,
  EditSvg,
  EthSvg,
  ManagerUsersSvg,
  ProductSvg,
  SettingsSvg,
} from "~~/components/Icons/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~~/components/ui/dropdown-menu";
import { Titles } from "~~/utils/enums";

interface ContributorManagerProps {
  ensName: string;
  amount: string;
  image?: string;
  title: Titles;
}
const ContributorManager = ({ ensName, amount, image, title: t }: ContributorManagerProps) => {
  const [copied, setCopied] = useState(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isEditStreamOpen, setIsEditStreamOpen] = useState<boolean>(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<Titles>(t);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(ensName);
      setCopied(true);

      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Unable to copy text: ", error);
    }
  };

  const value = (parseFloat(amount) / 0.5) * 100;

  const openEditStreamHandle = () => {
    setIsEditStreamOpen(prev => !prev);
    setIsActive(false);
  };

  const openRemoveHandle = () => {
    setIsRemoveOpen(prev => !prev);
    setIsActive(false);
    setIsEditStreamOpen(false);
  };

  return (
    <>
      <div className=" p-4 rounded-[16px] border border-[#E1E1E1] space-y-7 select-none">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap items-center gap-2">
              <div className="w-5 h-5 relative rounded-full">
                {image ? <img src={image} className="w-full h-full" /> : <AvatarSvg width={20} height={20} />}
              </div>
              <h6 className="text-[15px] font-medium leading-[16px]">{ensName}</h6>
              <span>{copied ? <CheckedSvg /> : <CopySvg className="cursor-pointer" onClick={handleCopyClick} />}</span>
              <span>
                <AddProjectTitleSelection
                  className="cursor-default"
                  title={title}
                  color={
                    ((title === Titles.DESIGNER || Titles.DEVELOPER) && "#F4F3FF") ||
                    (title === Titles.PRODUCTMANAGER && "#F6FBF6") ||
                    (title === Titles.ADMIN && "#FFF4F8")
                  }
                  icon={
                    (title === Titles.DESIGNER && <DisignerSvg />) ||
                    (title === Titles.DEVELOPER && <DeveloperSvg />) ||
                    (title === Titles.PRODUCTMANAGER && <ProductSvg />) ||
                    (title === Titles.ADMIN && <AdminSvg />)
                  }
                  textColor={
                    title === Titles.DESIGNER
                      ? "#9747FF"
                      : title === Titles.DEVELOPER
                      ? "#2360FF"
                      : title === Titles.PRODUCTMANAGER
                      ? "#03A300"
                      : title === Titles.ADMIN
                      ? "#FF6FA3"
                      : ""
                  }
                />
              </span>
            </div>
            <div>
              <DropdownMenu onOpenChange={setIsActive} open={isActive}>
                <DropdownMenuTrigger className="ring-offset-0 select-none outline-none">
                  {isActive ? <CloseSvg width={16} height={17} /> : <SettingsSvg className="cursor-pointer" />}
                </DropdownMenuTrigger>

                <DropdownMenuContent className="absolute -right-4 top-2 min-w-[157px] p-1">
                  <DropdownMenuItem className="flex justify-between items-center w-full" onClick={openEditStreamHandle}>
                    <h6 className="font-medium leading-[13px]">Edit Stream</h6>

                    <EditSvg />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex justify-between items-center w-full"
                    onClick={() => setTitle(Titles.ADMIN)}
                  >
                    <h6 className="font-medium leading-[13px]">Make admin</h6>

                    <ManagerUsersSvg />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex justify-between items-center w-full" onClick={openRemoveHandle}>
                    <h6 className="font-medium leading-[13px]">Remove User</h6>
                    <DeleteSvg />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center justify-between  space-x-[26px]">
            <Progress value={value} className="md:w-[65%] w-[50%]" />

            <div className="flex items-center space-x-[5px]">
              <EthSvg />
              <p className="font-medium">{amount} / 0.5</p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-[4px] p-[14px] flex md:flex-row flex-col md:items-center items-start md:space-x-6 space-x-0 justify-between md:space-y-0 space-y-4">
            <div className="flex items-center md:justify-center justify-between md:space-x-6 space-x-2 w-full">
              <p className="text-[#909090] text-[14px] font-medium leading-4">Stream withdraw</p>
              <span className="flex items-center space-x-1">
                <EthSvg />
                <p className="text-[14px] text-black font-medium leading-4">4</p>
              </span>
            </div>

            <svg
              width={2}
              height={18}
              className="md:block hidden"
              viewBox="0 0 2 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5625 0.536932V17.2812H0.230114V0.536932H1.5625Z" fill="#ECECEC" />
            </svg>
            <span className=" md:hidden flex items-center justify-center w-full">
              <svg width={18} height={3} viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.536932 0.9375L17.2812 0.9375V2.26989L0.536932 2.26989V0.9375Z" fill="#ECECEC" />
              </svg>
            </span>

            <div className="flex flex-1 items-center md:justify-center justify-between md:space-x-6 space-x-2 w-full">
              <p className="text-[#909090] text-[14px] font-medium leading-4">Contribution</p>

              <p className="text-[14px] font-medium leading-4">100</p>
            </div>
          </div>
        </div>
      </div>

      <EditStream
        setIsEditStream={setIsEditStreamOpen}
        isEditStreamOpen={isEditStreamOpen}
        ensName={ensName}
        title={title}
        image={image}
        setTitle={setTitle}
      />
      <RemoveUser ensName={ensName} image={image} isOpen={isRemoveOpen} setIsOpen={setIsRemoveOpen} />
    </>
  );
};

export default ContributorManager;
