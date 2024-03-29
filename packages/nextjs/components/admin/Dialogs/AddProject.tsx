import { Dispatch, SetStateAction, useState } from "react";
import AddProjectPeopleSelection from "./AddProjectTitleSelection";
import { projectPeopleSelectionMap } from "./AddUser";
import DialogWrapper from "./DialogWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { v4 } from "uuid";
import { ImageObject } from "~~/components/AccountDetailsComponents/StreamContractBalance";
import { DeleteSvg, ImageSvg } from "~~/components/Icons/Icons";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { Textarea } from "~~/components/ui/textarea";
import { toast } from "~~/components/ui/use-toast";
import { Titles } from "~~/utils/enums";
import { fileToDataURI } from "~~/utils/helper";

interface AddProjectProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddProject = ({ isOpen, setIsOpen }: AddProjectProps) => {
  const [images, setImages] = useState<ImageObject[]>([]);
  const [titleSelected, setTitleSelected] = useState<Titles | undefined>(undefined);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files || [];
    const imagesLeght = images.length;
    const totalImages = files.length + imagesLeght;
    if (files.length > 4 || imagesLeght > 4 || totalImages > 4) {
      return toast({
        variant: "destructive",
        description: "Maximum images is four images",
      });
    }

    try {
      const updatedImages = await Promise.all(
        Array.from(files).map(async file => {
          const url = (await fileToDataURI(file)) as any;

          if (url?.error) return;

          return { id: v4(), url };
        }),
      );

      setImages((prevImages: ImageObject[]) => [
        ...prevImages,
        ...(updatedImages.filter(image => image !== undefined) as unknown as ImageObject[]),
      ]);
    } catch (error) {
      console.error("Error processing images:", error);
      return toast({
        variant: "destructive",
        description: `${error}`,
      });
    }
  };

  const deleteImageHandle = (id: string) => {
    const updatedImages = images.map(image => {
      if (image.id === id) {
        image.url = "";
      }

      return image;
    });
    const imagesWithUrl = updatedImages.filter(image => image.url !== "");
    setImages(imagesWithUrl);
    toast({
      variant: "default",
      description: `Image deleted successful`,
    });
  };

  return (
    <DialogWrapper title="Add Project" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="space-y-8">
        <Input
          placeholder="Enter Project name here"
          className="placeholder:text-[#A6A6A6] placeholder:font-ibm_plex_mono placeholder:text-[14px] placeholder:font-medium border-none bg-[#F9FBFC]"
        />

        <div className="space-y-2">
          <Textarea
            className="placeholder:text-[#A6A6A6] placeholder:text-[12px] text-[12px] placeholder:font-medium placeholder:leading-5 bg-[#F9FBFC] p-[10px] focus:ring-transparent border-none rounded-[8px] resize-none"
            placeholder="Project description"
            defaultChecked={false}
            autoFocus={false}
          />
          <div className="flex justify-start">
            <span className="flex items-center space-x-1 bg-[#F9F9F9] p-2 text-black rounded-[8px] hover:bg-[#F9F9F9]/75 relative">
              <ImageSvg />
              <p className="text-[12px] font-medium">Add image</p>
              <label className="absolute h-full w-full bg-transparent cursor-pointer" htmlFor="withdraw-img"></label>

              <input
                type="file"
                className="hidden"
                id="withdraw-img"
                onChange={handleFileChange}
                accept="image/*"
                max={3}
                multiple
              />
            </span>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {images.length !== 0 && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
              }}
              className="w-full h-[85px] grid grid-cols-4 p-2 gap-2 bg-[#F3F3F3] rounded-[12px]"
            >
              <AnimatePresence>
                {images.map(image => (
                  // Your JSX content for each iteration goes here
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 1 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                    key={image.id}
                    className="bg-white rounded-[8px] overflow-hidden h-full w-full relative"
                  >
                    <img src={image.url} alt="image" className="w-full h-full" style={{ objectFit: "cover" }} />

                    <span
                      className="w-[24px] h-[24px] rounded-full bg-[#FFEDED] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer hover:bg-[#FFEDED]/80"
                      onClick={() => deleteImageHandle(image.id)}
                    >
                      <DeleteSvg />
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-wrap items-center gap-2">
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

        <div className="flex w-full justify-end">
          <Button
            text="Confirm"
            className="bg-black text-[16px] font-ibm_plex_mono font-medium px-[12] py-[10px] rounded-full transition duration-150 ease-in-out hover:bg-[#000]/80"
          />
        </div>
      </div>
    </DialogWrapper>
  );
};

export default AddProject;
