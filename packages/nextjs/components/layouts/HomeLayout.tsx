import { motion } from "framer-motion";
import BackgroundSvg from "~~/components/BackgroundSvg";
import BackgroundSvgMobile from "~~/components/BackgroundSvgMobile";
import { Footer } from "~~/components/Footer";
import { NavBar } from "~~/components/NavBar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <section className="md:h-[120vh] 2xl:h-[90vh] h-full flex flex-col justify-between relative z-50">
      <NavBar />
      <div className="2xl:container md:mt-24 -mt-10">{children}</div>
      <motion.span
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
        }}
        className="md:block absolute hidden top-24 -z-20 right-0 left-0 2xl:container 2xl:top-[240px]"
      >
        <BackgroundSvg />
        {/* <img src="/background.svg" /> */}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="absolute md:hidden  bottom-32 right-0 -z-40"
      >
        {/* <BackgroundSvg width={375} height={522} /> */}

        <BackgroundSvgMobile />
        {/* <img src="/backgroundMobil.svg" /> */}
      </motion.span>

      <Footer className="relative" />
    </section>
  );
};

export default HomeLayout;
