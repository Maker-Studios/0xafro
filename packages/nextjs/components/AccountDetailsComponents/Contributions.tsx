/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Button } from "../ui/button";
import Contribution from "./Contribution";
import { formatDate } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
// import { v4 } from "uuid";
import { cn } from "~~/lib/utils";
import { Activity } from "~~/types/utils";

const Contributions = ({ activities }: { activities: Activity[] }) => {
  const [visibleContributions, setVisibleContributions] = useState(3);
  const contributions = activities.slice(0, visibleContributions);

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
            <Contribution
              key={contribution.args.reason}
              address={contribution.args.to}
              reason={contribution.args.reason}
              amount={contribution.args.amount}
              date={formatDate(Number(contribution.block.timestamp) * 1000, "yyyy-MM-dd")}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className={cn("flex justify-center", visibleContributions === contributions.length + 1 && "hidden")}>
        <Button
          text="Show more contributions"
          variant={"ghost"}
          className="py-[17px] px-2 h-0 border-[0.5px] border-[#E1E1E1] bg-white rounded-full text-[12px]"
          onClick={loadMoreContributions}
        />
      </div>
      <div className={cn("hidden justify-center", visibleContributions === contributions.length + 1 && "flex")}>
        <Button
          text="Show less"
          variant={"ghost"}
          className="py-[17px] px-2 h-0 border-[0.5px] border-[#E1E1E1] bg-white rounded-full text-[12px]"
          onClick={resetContributions}
        />
      </div>
    </div>
  );
};

export default Contributions;
