/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Activities } from "../AccountDetailsComponents";
import Contribution from "./Contribution";
import { AnimatePresence, motion } from "framer-motion";
import { v4 } from "uuid";
import { Activity } from "~~/types/utils";

const Contributions = ({ activities }: { activities?: Activity[] }) => {
  // const [visibleContributions, setVisibleContributions] = useState(3);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const allContributions = [
    <Contribution
      image="/avatar.png"
      ensName="leyeconnect.eth"
      destribution="Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold"
      date="2023-10-01"
      coverImages={[
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/1.jpg" },
      ]}
    />,
    <Contribution
      ensName="mazikvng.eth"
      destribution="Technical Implementation for usePage3"
      date="2023-10-01"
      coverImages={[
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/2.jpg" },
        { id: v4(), url: "/3.jpg" },
        { id: v4(), url: "/Frame40.png" },
      ]}
    />,
    <Contribution
      image="/avatar.png"
      ensName="leyeconnect.eth"
      destribution="Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold"
      date="2023-10-01"
      coverImages={[{ id: v4(), url: "/Frame40.png" }]}
    />,
    <Contribution
      ensName="mazikvng.eth"
      destribution="Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold"
      date="2023-10-01"
    />,
    <Contribution
      ensName="mazikvng.eth"
      destribution="Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold"
      date="2023-10-01"
    />,
    <Contribution
      ensName="mazikvng.eth"
      destribution="Technical Implementation for usePage3"
      date="2023-10-01"
      coverImages={[
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
      ]}
    />,
    <Contribution
      image="/avatar.png"
      ensName="leyeconnect.eth"
      destribution="Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold"
      date="2023-10-01"
      coverImages={[
        { id: v4(), url: "/Frame40.png" },
        { id: v4(), url: "/Frame40.png" },
      ]}
    />,
  ];
  const contributions = allContributions.slice(0, 3);


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
            {contribution}
          </motion.div>
        ))}
      </AnimatePresence>
      <Activities isOpen={isOpen} setIsOpen={setIsOpen} activities={activities} />

    </div>
  );
};
export default Contributions;
