import React from "react";
import { cn } from "~~/lib/utils";
import { hexToRgba } from "~~/utils/helper";

interface AddProjectTitleSelectionProps {
  color: string;
  textColor: string;
  icon: React.ReactNode;
  title: string;
  className?: string;
  onClick?: () => void;
  titleSelected?: boolean;
}
const AddProjectTitleSelection = ({
  color,
  icon,
  title,
  className,
  textColor,
  onClick,
  titleSelected,
}: AddProjectTitleSelectionProps) => {
  const resultTitle = title.replace(/-/g, " ").replace(/ /g, " ");
  const rgba = hexToRgba(textColor, 0.25);

  return (
    <div
      className={cn(
        "flex items-center md:space-x-1 space-x-[2px] md:px-2 px-1 py-1 rounded-full cursor-pointer border border-transparent",

        className,
      )}
      style={{
        background: color,
        borderColor: titleSelected ? textColor : "transparent",
        boxShadow: titleSelected ? `0px 0px 0px 2px ${rgba}` : "none",
      }}
      onClick={onClick}
    >
      <span>{icon}</span>
      <h6 className="md:text-[12px] text-[11px] font-medium capitalize" style={{ color: textColor }}>
        {resultTitle}
      </h6>
    </div>
  );
};

export default AddProjectTitleSelection;
