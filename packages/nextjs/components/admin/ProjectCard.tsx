import { useState } from "react";
import DropdownMenuProject from "./Dialogs/DropdownMenuProject";
import { EthSvg } from "~~/components/Icons/Icons";

interface ProductCardProps {
  icon: React.ReactNode;
  settingTitle: string;
  color: string;
  bgColor: string;
  image: string;
  description: string;
  projectName: string;
}
const ProductCard = ({ icon, settingTitle, description, color, bgColor, image, projectName }: ProductCardProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const activeHandle = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div
      className="flex space-x-4 border-[0.5px] border-[#CDDFE9] bg-white rounded-2xl p-4"
      style={{
        boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
      }}
    >
      <div className="md:h-[70px] h-[56px] w-48 rounded-[4px] bg-[#E0E0E0]/25 relative overflow-hidden">
        <img src={image} alt="avatar image" className="w-full h-full " style={{ objectFit: "cover" }} />
      </div>
      <div className="space-y-2">
        <span className="flex justify-between items-center  ">
          <p className="font-medium leading-4">{projectName}</p>
          <span>
            <DropdownMenuProject
              isActive={isActive}
              setIsActive={activeHandle}
              bgColor={bgColor}
              textColor={color}
              image={image}
              projectDescription={description}
              projectName={projectName}
              settingTitle={settingTitle}
              icon={icon}
            />
          </span>
        </span>
        <p className="text-[12px] text-[#878787] font-medium leading-[18px]">{description}</p>

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
  );
};

export default ProductCard;
