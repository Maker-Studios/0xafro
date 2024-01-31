/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */
import { useState } from "react";
import Activities from "./Activities";
import Contribution from "./Contribution";
import { formatDate } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
// import { v4 } from "uuid";
import { Activity } from "~~/types/utils";

const Contributions = ({ activities }: { activities: Activity[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contributions = activities.slice(0, 3);

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
              // coverImages={[
              //   { id: v4(), url: "/Frame40.png" },
              //   { id: v4(), url: "/2.jpg" },
              //   { id: v4(), url: "/3.jpg" },
              //   { id: v4(), url: "/Frame40.png" },
              // ]}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <Activities isOpen={isOpen} setIsOpen={setIsOpen} activities={activities} />
    </div>
  );
};

export default Contributions;
