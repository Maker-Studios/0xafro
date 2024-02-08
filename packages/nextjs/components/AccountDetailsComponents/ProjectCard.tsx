import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CompletedSvg, LiveSvg, OngoingSvg } from "../Icons/Icons";
import DropdownMenuProject from "../admin/Dialogs/DropdownMenuProject";
import { cn } from "~~/lib/utils";

/* eslint-disable @next/next/no-img-element */
interface ProductCardProps {
  image: string;
  description: string;
  name: string;
  status: "ongoing" | "completed" | "live";
  link: string;
}

const ProductCard = ({ image, description, name, status, link }: ProductCardProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const path = usePathname();

  const handleStatusAccent = () => {
    if (status === "ongoing") {
      return {
        color: "#9747FF",
        bgColor: "#F4F3FF",
      };
    }

    if (status === "completed") {
      return {
        color: "#2360FF",
        bgColor: "#F4F3FF",
      };
    }

    if (status === "live") {
      return {
        color: "#03A300",
        bgColor: "#F6FBF6",
      };
    }

    return {
      color: "",
      bgColor: "",
    };
  };

  const activeHandle = () => {
    setIsActive(prev => !prev);
  };

  const accent: { color: string; bgColor: string } = handleStatusAccent();

  return (
    <div
      className="flex space-x-4 border-[0.5px] border-[#CDDFE9] rounded-2xl p-4 bg-white"
      style={{
        boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
      }}
    >
      <div className="md:h-20 h-[56px] w-24 rounded-[4px] bg-[#E0E0E0]/25 overflow-hidden relative">
        <Image src={image} alt="avatar image" fill style={{ objectFit: "cover" }} />
      </div>

      <div className="flex-1 flex flex-col justify-between space-y-6 flex-shrink-0">
        <div className="space-y-2">
          <span className="flex justify-between items-center  ">
            <p className="font-medium leading-4">{name}</p>
            {path === "/admin" && (
              <span>
                <DropdownMenuProject
                  isActive={isActive}
                  setIsActive={activeHandle}
                  status={status}
                  image={image}
                  projectDescription={description}
                  projectName={name}
                />
              </span>
            )}
          </span>
          <p className="text-[12px] text-[#878787] font-medium leading-[18px]">{description}</p>

          <div className="text-[12px] text-[#878787] font-medium flex">
            <a href={link} className="underline leading-[18px]" target="_blank" rel="noreferrer">
              {link}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-1 py-1 px-2 rounded-full" style={{ background: accent.bgColor }}>
            {status === "ongoing" && <OngoingSvg />}
            {status === "completed" && <CompletedSvg />}
            {status === "live" && <LiveSvg />}

            <p className={cn("text-[12px] capitalize")} style={{ color: accent.color }}>
              {status}
            </p>
          </div>

          {/* <div className="flex items-center space-x-2">
            <p className="text-[12px] font-medium text-[#9F9F9F]">Spend</p>
            <span className="flex items-center space-x-1">
              <p className="text-[12px] font-medium">Ξ</p>
              <p className="text-[12px] font-medium">0.5</p>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
