import { useState } from "react";
import Contribution from "../AccountDetailsComponents/Contribution";
import { AnimatePresence, motion } from "framer-motion";
import { v4 } from "uuid";
import { Button } from "~~/components//ui/button";
import { cn } from "~~/lib/utils";

const Contributions = () => {
  const [visibleContributions, setVisibleContributions] = useState(4);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const allContributions = [
    {
      image: "/avatar.png",
      ensName: "leyeconnect.eth",
      destribution:
        "Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold",
      date: "2023-10-01",
      coverImages: [
        { id: v4(), url: "/1.jpg" },
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/2.jpg" },
      ],
    },
    {
      ensName: "mazikvng.eth",
      destribution: "Technical Implementation for usePage3",
      date: "2023-10-01",
      coverImages: [
        { id: v4(), url: "/1.jpg" },
        { id: v4(), url: "/2.jpg" },
      ],
    },

    {
      image: "/avatar.png",
      ensName: "leyeconnect.eth",
      destribution:
        "Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold",
      date: "2023-10-01",
      coverImages: [{ id: v4(), url: "/Frame40.png" }],
    },
    {
      ensName: "mazikvng.eth",
      destribution:
        "Blockchain implementation of usePage3 with Scaffold eth : https://github.com/Maker-Studios/usepage3-scaffold",
      date: "2023-10-01",
    },

    {
      ensName: "mazikvng.eth",
      destribution: "Technical Implementation for usePage3",
      date: "2023-10-01",
      coverImages: [
        { id: v4(), url: "/1.jpg" },
        { id: v4(), url: "/3.jpg" },
        { id: v4(), url: "/2.jpg" },
        { id: v4(), url: "/Frame40.png" },
      ],
    },
    {
      image: "/avatar.png",
      ensName: "leyeconnect.eth",
      destribution:
        "Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold",
      date: "2023-10-01",
      coverImages: [
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/1.jpg" },
      ],
    },
  ];
  const contributions = allContributions.slice(0, visibleContributions);

  const loadMoreContributions = () => {
    setVisibleContributions(prev => prev + 4);
    setIsVisible(prev => !prev);
  };
  const resetContributions = () => {
    setVisibleContributions(4);
    setIsVisible(prev => !prev);
  };

  return (
    <div className="space-y-2 w-full">
      <AnimatePresence initial={false}>
        {contributions.map((contribution, i) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            key={i}
          >
            <Contribution {...contribution} />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className={cn("flex justify-center", contributions.length < 4 && "hidden")}>
        {!isVisible ? (
          <Button
            text="Load more contributions"
            variant={"ghost"}
            className="py-[17px] px-2 h-0 border-[0.5px] border-[#E1E1E1] bg-white rounded-full text-[12px]"
            onClick={loadMoreContributions}
          />
        ) : (
          <Button
            text="Show less"
            variant={"ghost"}
            className="py-[17px] px-2 h-0 border-[0.5px] border-[#E1E1E1] bg-white rounded-full text-[12px]"
            onClick={resetContributions}
          />
        )}
      </div>
    </div>
  );
};

export default Contributions;
