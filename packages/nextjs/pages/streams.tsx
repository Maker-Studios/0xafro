import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";
import {
  Contributions,
  HackerEthStreams,
  Projects,
  StreamContractBalance,
} from "~~/components/AccountDetailsComponents";
import Loader from "~~/components/Loader";
// import RecentFunding from "~~/components/AccountDetailsComponents/RecentFunding";
import OthersLayout from "~~/components/layouts/OthersLayout";
import deployedContracts from "~~/contracts/deployedContracts";
import { useScaffoldContractRead, useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";

const AccountDetailPage = () => {
  const [builderList, setBuilderList] = useState<string[]>([]);
  const { targetNetwork } = useTargetNetwork();
  const streamAddress = targetNetwork
    ? (deployedContracts[targetNetwork.id as keyof typeof deployedContracts].BuilderStreams.address as `0x${string}`)
    : "";
  const { address } = useAccount();

  const isContributor = builderList.includes(address ?? "");

  const { data: allBuildersData, isLoading: allBuildersLoading } = useScaffoldContractRead({
    contractName: "BuilderStreams",
    functionName: "allBuildersData",
    args: [builderList],
  });

  const { data: addBuilderEvents } = useScaffoldEventHistory({
    contractName: "BuilderStreams",
    eventName: "AddBuilder",
    fromBlock: BigInt("0"),
  });

  const { data: withdrawEvents, isLoading } = useScaffoldEventHistory({
    contractName: "BuilderStreams",
    eventName: "Withdraw",
    fromBlock: BigInt("0"),
    blockData: true,
  });

  useEffect(() => {
    if (addBuilderEvents && addBuilderEvents.length > 0) {
      const fetchedBuilderList = addBuilderEvents.map((event: any) => event.args.to);
      // remove duplicates
      const uniqueBuilderList = [...new Set(fetchedBuilderList)];
      setBuilderList(uniqueBuilderList);
    }
  }, [addBuilderEvents]);

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
        className="mt-[56px] grid md:grid-cols-3 grid-cols-1 md:gap-[91px] gap-[80px] md:mb-[90px] md:container px-6"
      >
        <div className="space-y-[48px]">
          <StreamContractBalance address={streamAddress as `0x${string}`} isContributor={isContributor} />
          {allBuildersData && <HackerEthStreams builders={allBuildersData as []} isLoading={allBuildersLoading} />}

          {/* <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
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
          </div> */}
        </div>
        <div>
          <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
            <p className="font-medium font-ibm_plex_mono">Activities</p>

            <>
              {isLoading && (
                <div className="pt-10 flex justify-center">
                  <Loader />
                </div>
              )}
            </>

            {withdrawEvents && withdrawEvents.length > 0 && <Contributions activities={withdrawEvents as []} />}
          </div>
        </div>
        <div>
          <div className="space-y-6 bg-[#F9FBFC] p-4 rounded-[24px]">
            <h2 className="font-medium text-[16px] font-ibm_plex_mono">Projects</h2>
            <Projects />
          </div>
        </div>
      </motion.div>
    </OthersLayout>
  );
};

export default AccountDetailPage;
