import { CompletedSvg, LiveSvg, OngoingSvg } from "../Icons/Icons";
import { cn } from "~~/lib/utils";

/* eslint-disable @next/next/no-img-element */
interface ProductCardProps {
  image: string;
  description: string;
  name: string;
  status: "ongoing" | "completed" | "live";
}

const ProductCard = ({ image, description, name, status }: ProductCardProps) => {
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

  const accent: { color: string; bgColor: string } = handleStatusAccent();

  return (
    <div
      className="flex space-x-4 border-[0.5px] border-[#CDDFE9] rounded-2xl p-4 bg-white"
      style={{
        boxShadow: "0px 0.5px 0px 0px rgba(145, 215, 255, 0.50)",
      }}
    >
      <div className="md:h-[70px] h-[56px] w-48 rounded-[4px] bg-[#E0E0E0]/25 relative overflow-hidden">
        <img src={image} alt="avatar image" className="w-full h-full " style={{ objectFit: "cover" }} />
      </div>
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-2">
          <p className="font-medium leading-6">{name}</p>
          <p className="text-[12px] text-[#878787] font-medium leading-[18px]">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 py-1 px-2 rounded-full" style={{ background: accent.bgColor }}>
            {status === "ongoing" && <OngoingSvg />}
            {status === "completed" && <CompletedSvg />}
            {status === "live" && <LiveSvg />}

            <p className={cn("text-[12px]")} style={{ color: accent.color }}>
              {status}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-[12px] font-medium text-[#9F9F9F]">Spend</p>
            <span className="flex items-center space-x-1">
              <p className="text-[12px] font-medium">Ξ</p>
              <p className="text-[12px] font-medium">0.5</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
