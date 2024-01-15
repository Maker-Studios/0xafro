import { Dispatch, SetStateAction, useState } from "react";
import { CloseSvg, DeleteSvg, ImageSvg } from "../Icons/Icons";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import Currency from "./Currency";
import { ImageObject } from "./StreamContractBalance";
import { AnimatePresence, motion } from "framer-motion";
import { v4 } from "uuid";
import { Currencies } from "~~/utils/enums";
import { fileToDataURI } from "~~/utils/helper";

interface WithDrawProps {
  isWithdrawOpen: boolean;
  setIsWithdrawOpen: Dispatch<SetStateAction<boolean>>;
}
const WithDraw = ({ setIsWithdrawOpen, isWithdrawOpen }: WithDrawProps) => {
  const [currency, setCurrency] = useState<Currencies>(Currencies.ETH);
  const [images, setImages] = useState<ImageObject[]>([]);

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
    <>
      <Button
        text="Withdraw"
        className="bg-white text-[11px] text-black flex md:w-auto w-full items-center py-[18px] h-0 rounded-full transition duration-150 ease-in-out hover:bg-white/70"
        onClick={() => setIsWithdrawOpen(true)}
      />
      <Dialog onOpenChange={setIsWithdrawOpen} open={isWithdrawOpen}>
        <DialogContent className="md:space-y-4 space-y-[21px] md:p-6 p-[19px]">
          <div className="flex justify-between items-center">
            <h3 className="md:text-[20px] text-[16px] font-ibm_plex_mono font-medium leading-6">
              Withdraw from your stream
            </h3>
            <span
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#F8F8F8] cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8F8F8]/70"
              onClick={() => setIsWithdrawOpen(false)}
            >
              <CloseSvg width={24} height={24} />
            </span>
          </div>
          <div className="space-y-2">
            <Textarea
              className="placeholder:text-[#A6A6A6] placeholder:text-[12px] text-[12px] placeholder:font-medium placeholder:leading-5 bg-[#F9FBFC] p-[10px] focus:ring-transparent border-none rounded-[8px] resize-none"
              placeholder="Reason for withdrawing and link to github plz"
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
                className="w-full h-[85px] grid grid-cols-4 p-2 gap-2 bg-[#F9FBFC] rounded-[12px]"
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

          <Currency currency={currency} setCurrency={setCurrency} />

          <div className="flex w-full justify-end space-x-3">
            <Button
              text="Confirm Withdrawal"
              className="bg-[#000] text-[16px] font-medium px-[14px] py-[20px] h-0 rounded-full transition duration-150 ease-in-out hover:bg-[#000]/80"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WithDraw;
