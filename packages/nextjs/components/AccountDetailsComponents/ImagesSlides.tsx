/* eslint-disable @next/next/no-img-element */
import { SetStateAction } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { ImageObject } from "./StreamContractBalance";
import { cn } from "~~/lib/utils";

interface ImagesSlidesProps {
  isImageOpen: boolean;
  setIsImageOpen: React.Dispatch<SetStateAction<boolean>>;
  selectionId: ImageObject["id"];
  coverImages?: ImageObject[];
  setSelectionId: React.Dispatch<SetStateAction<ImageObject["id"]>>;
  coverImageToMap?: ImageObject[];
}

const ImagesSlides = ({
  isImageOpen,
  setIsImageOpen,
  selectionId,
  coverImages,
  setSelectionId,
  coverImageToMap,
}: ImagesSlidesProps) => {
  return (
    <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
      <DialogContent className={cn("w-[600px] bg-white p-6 overflow-hidden space-y-2")}>
        <div className="w-full h-[300px] rounded-md relative overflow-hidden">
          <img
            src={coverImages?.find(i => i.id === selectionId)?.url}
            alt="avatar image"
            className="w-full h-full "
            style={{ objectFit: "cover" }}
          />
        </div>

        {coverImageToMap && coverImageToMap?.length > 1 && (
          <div className="w-full flex items-center space-x-10">
            {coverImageToMap?.map(img => (
              <div
                key={img.id}
                className={cn(
                  "relative overflow-hidden w-32 h-24 rounded-[14px] cursor-pointer border-[3px] border-transparent",
                  img.id === selectionId && "border-[#9747FF]/50",
                )}
                onClick={() => setSelectionId(img.id)}
              >
                <img src={img.url} alt="avatar image" className="w-full h-full " style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImagesSlides;
