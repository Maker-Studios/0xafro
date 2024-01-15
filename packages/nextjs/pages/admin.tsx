import { motion } from "framer-motion";
import { Contributions, HackerEthStreams, Projects, RecentFunding, StreamContractBalance } from "~~/components/admin";
import OthersLayout from "~~/components/layouts/OthersLayout";

const AdminPage = () => {
  return (
    <OthersLayout>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="mt-[56px] grid md:grid-cols-3 grid-cols-1 md:gap-[91px] gap-[80px]  md:mb-[90px] md:container px-6 "
      >
        <div className="space-y-[48px]">
          <StreamContractBalance />
          <HackerEthStreams />
          <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
            <p className="font-ibm_plex_mono font-medium leading-6">Recent funding</p>
            <div className="space-y-4">
              <RecentFunding date="2023-10-01" ensName="mazikvng.eth" discription="Keep up the good works guys" />
              <RecentFunding
                date="2023-10-01"
                ensName="mazikvng.eth"
                discription="Blockchain implementation of usePage3 with Sacffold eth : https://github.com/Maker-Studios/usepage3-scaffold"
              />
              <RecentFunding date="2023-10-01" ensName="mazikvng.eth" />
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
          <p className="font-medium font-ibm_plex_mono">Contributions</p>
          <Contributions />
        </div>
        <div>
          <Projects />
        </div>
      </motion.div>
    </OthersLayout>
  );
};

export default AdminPage;
