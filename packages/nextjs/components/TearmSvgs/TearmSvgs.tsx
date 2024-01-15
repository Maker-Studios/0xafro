import { BlessSvg, LeyeSvg, MaziSvg, MosesSvg } from "../Icons/Icons";
import { cn } from "~~/lib/utils";

interface TearmSvgsProps {
  className?: string;
}
const TearmSvgs = ({ className }: TearmSvgsProps) => {
  return (
    <span className={cn("flex items-center", className)}>
      <span className="flex  relative">
        <BlessSvg />
        <span className="">
          <MaziSvg className="absolute left-[49px]" />
          <span className="relative">
            <MosesSvg className="absolute left-[40px]" />
            <span className="relative">
              <LeyeSvg className="absolute left-[90px]" />
            </span>
          </span>
        </span>
      </span>
    </span>
  );
};

export default TearmSvgs;
