import { Dispatch, SetStateAction, useState } from "react";
import { EditProject, RemoveProject } from ".";
import { v4 } from "uuid";
import { DeleteSvg, EditSvg, ThreeDots } from "~~/components/Icons/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~~/components/ui/dropdown-menu";
import { cn } from "~~/lib/utils";

interface DropdownMenuProjectProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  projectDescription: string;
  projectName: string;
  status: "ongoing" | "completed" | "live";
  image: string;
}

const DropdownMenuProject = ({
  isActive,
  setIsActive,
  projectDescription,
  projectName,
  status,
  image,
}: DropdownMenuProjectProps) => {
  const [isEditProjectOpen, setIsEditProjectOpen] = useState<boolean>(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState<boolean>(false);

  const openEditProjectHandle = () => {
    setIsEditProjectOpen(prev => !prev);

    setIsRemoveOpen(false);
  };
  const openRemoveProjectHandle = () => {
    setIsRemoveOpen(prev => !prev);
    setIsEditProjectOpen(false);
  };
  return (
    <>
      <DropdownMenu onOpenChange={setIsActive} open={isActive}>
        <DropdownMenuTrigger className="ring-offset-0 select-none outline-none">
          <span
            className={cn(
              "flex items-center justify-center w-6 h-6 rounded-full bg-[#F8F8F8] cursor-pointer border border-transparent ring-0 ring-offset-transparent relative",
              isActive && "border-black ring-2 ring-slate-500",
            )}
            onClick={() => setIsActive(prev => !prev)}
            style={{
              boxShadow: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))",
            }}
          >
            <ThreeDots />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="absolute -right-4 top-2 min-w-[157px] p-1">
          <DropdownMenuItem>
            <span className="flex justify-between items-center w-full" onClick={openEditProjectHandle}>
              <h6 className="font-medium leading-[13px]">Edit Project</h6>

              <EditSvg />
            </span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <span className="flex justify-between items-center w-full" onClick={openRemoveProjectHandle}>
              <h6 className="font-medium leading-[13px]">Remove Project</h6>

              <DeleteSvg />
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditProject
        isOpen={isEditProjectOpen}
        setIsOpen={setIsEditProjectOpen}
        projectDescription={projectDescription}
        projectName={projectName}
        images={[
          {
            id: v4(),
            url: "/Frame40.png",
          },
          {
            id: v4(),
            url: "/2.jpg",
          },
          {
            id: v4(),
            url: "/3.jpg",
          },
        ]}
      />
      <RemoveProject
        isOpen={isRemoveOpen}
        setIsOpen={setIsRemoveOpen}
        description={projectDescription}
        status={status}
        image={image}
      />
    </>
  );
};

export default DropdownMenuProject;
