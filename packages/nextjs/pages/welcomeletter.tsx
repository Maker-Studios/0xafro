import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CloseSvg, EnvelopeSvg } from "~~/components/Icons/Icons";
import { TearmSvgs } from "~~/components/TearmSvgs";
import HomeLayout from "~~/components/layouts/HomeLayout";

const Welcomeletter = () => {
  const router = useRouter();

  return (
    <HomeLayout>
      <div className="md:px-[3.125rem] px-6">
        <div className="md:w-[440px] w-full font-ibm_plex_mono md:mt-[11.25rem] mt-[108px] md:mb-16 mb-[100px]">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
            }}
            className="space-y-6 md:px-6 px-[17px] pt-16 pb-[72px] bg-white border-[0.5px] border-[#EAEAEA] rounded-2xl md:opacity-60 relative"
            style={{ boxShadow: "0px 15px 30px 0px rgba(0, 0, 0, 0.05)" }}
          >
            <EnvelopeSvg className="absolute -top-20" />
            <div
              className="absolute -top-11 -right-4 p-2 bg-[#FFF] border-[0.5px] rounded-full border-[#EAEAEA] cursor-pointer"
              style={{
                boxShadow: "0px 15px 30px 0px rgba(0, 0, 0, 0.05)",
                border: "0.5px solid #EAEAEA",
              }}
              onClick={() => router.push("/")}
            >
              <CloseSvg />
            </div>
            <h2 className="font-medium">Welcome!</h2>
            <p className="md:text-[16px] text-[14px]">
              This project aims to provide a platform to retroactively fund open-source work by providing a monthly UBI
              to handpicked open-source developers, rewarding them for their ongoing contributions. Developers can
              submit their contributions (stored in a Smart Contract), automatically claim grant streams, and showcase
              their work to the public.
            </p>
            <TearmSvgs className="absolute -bottom-7" />
          </motion.div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Welcomeletter;
