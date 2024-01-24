/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction, useState } from "react";
import Currency from "../Currency";
import DialogWrapper from "../DialogWrapper";
import AddProjectPeopleSelection from "./AddProjectTitleSelection";
import { v4 } from "uuid";
import { AdminSvg, AvatarSvg, DeveloperSvg, DisignerSvg, ProductSvg } from "~~/components/Icons/Icons";
import { Button } from "~~/components/ui/button";
import { cn } from "~~/lib/utils";
import { Currencies, Titles } from "~~/utils/enums";

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @next/next/no-img-element */

interface EditStreamProps {
  isEditStreamOpen: boolean;
  setIsEditStream: Dispatch<SetStateAction<boolean>>;
  ensName: string;
  title: Titles;
  image?: string;
  setTitle: Dispatch<SetStateAction<Titles>>;
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

const EditStream = ({ isEditStreamOpen, setIsEditStream, ensName: name, title, image, setTitle }: EditStreamProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ensName, setEnsName] = useState<string>(name);
  const [currency, setCurrency] = useState<Currencies>(Currencies.ETH);
  const [titleSelected, setTitleSelected] = useState<Titles | undefined>(title);

  const editStreamHandle = () => {
    setIsEditStream(false);
  };

  return (
    <>
      <DialogWrapper title="Edit Stream" isOpen={isEditStreamOpen} setIsOpen={setIsEditStream}>
        <div className="space-y-8">
          <div className="w-full flex flex-1 h-[57px] rounded-[8px] bg-[#F9FBFC]  py-2 pl-[10px]">
            <div
              className="bg-white p-2 flex items-center space-x-[13px] rounded-[8px] border border-[#CDDFE9] w-auto"
              style={{
                boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
              }}
            >
              <div className="relative overflow-hidden w-[24px] h-[24px] rounded-full flex items-end">
                {image ? (
                  <img src={image} alt="image" className="w-full h-full" style={{ objectFit: "cover" }} />
                ) : (
                  <AvatarSvg width={20} height={20} />
                )}
              </div>
              <p className="text-[18px] font-medium leading-[19px]">{ensName}</p>
            </div>
          </div>
          <div
            className="flex flex-wrap
           items-center gap-2"
          >
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
          <div className="space-y-4">
            <h6 className="font-medium">Allot stream</h6>

            <Currency currency={currency} setCurrency={setCurrency} />
          </div>

          <div className={cn("w-full flex justify-end")} onClick={titleSelected ? editStreamHandle : undefined}>
            <Button
              text="Save and close"
              className="bg-black text-[16px] font-ibm_plex_mono font-normal px-[4px] py-3 rounded-full transition duration-150 ease-in-out hover:bg-[#000]/80"
              disabled={!titleSelected}
              onClick={() => setTitle(titleSelected as Titles)}
            />
          </div>
        </div>
      </DialogWrapper>
    </>
  );
};

export default EditStream;
