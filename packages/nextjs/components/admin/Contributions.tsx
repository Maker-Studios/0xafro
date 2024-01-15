import { useState } from "react";
import Contribution from "../AccountDetailsComponents/Contribution";
import { AnimatePresence, motion } from "framer-motion";
import { v4 } from "uuid";
import { Button } from "~~/components//ui/button";
import { cn } from "~~/lib/utils";

const Contributions = () => {
  const [visibleContributions, setVisibleContributions] = useState(4);
  const allContributions = [
    {
      image: "/avatar.png",
      ensName: "leyeconnect.eth",
      destribution:
        "Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold",
      date: "2023-10-01",
      coverImages: [
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
      ],
    },
    {
      ensName: "mazikvng.eth",
      destribution: "Technical Implementation for usePage3",
      date: "2023-10-01",
      coverImages: [
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
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
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
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
        { id: v4(), url: "/Frame40.png" },
      ],
    },
  ];
  const contributions = allContributions.slice(0, visibleContributions);

  const loadMoreContributions = () => {
    setVisibleContributions(prev => prev + 4);
  };
  const resetContributions = () => {
    setVisibleContributions(4);
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
      <div className={cn("flex justify-center", visibleContributions === contributions.length + 1 && "hidden")}>
        <Button
          text="Load more contributions"
          variant={"ghost"}
          className="py-[10px] px-2 border border-black rounded-full"
          onClick={loadMoreContributions}
        />
      </div>
      <div className={cn("hidden justify-center", visibleContributions === contributions.length + 1 && "flex")}>
        <Button
          text="Show less"
          variant={"ghost"}
          className="py-[10px] px-2 border border-black rounded-full"
          onClick={resetContributions}
        />
      </div>
    </div>
  );
};

export default Contributions;
